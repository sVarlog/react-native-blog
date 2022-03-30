import React, {useState} from 'react';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

const askForPermissions = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync();

    if (status !== 'granted') {
        Alert.alert('Error', 'You don\'t give permission for camera');
        return false;
    } else {
        return true;
    }
}

export const PhotoPicker = ({onPick}) => {
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions();

        if (!hasPermissions) {
            return
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: .7,
            allowsEditing: false,
            aspect: [16, 9]
        });

        setImage(img.uri);
        onPick(img.uri);
    };

    return (
        <View style={styles.wrapper}>
            {image && <Image style={styles.image} source={{uri: image}} />}
            <Button title="Make a photo" onPress={takePhoto} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    }
})