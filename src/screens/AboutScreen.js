import React, {useCallback} from 'react';
import { View, Text, Linking, Alert, StyleSheet, Pressable } from 'react-native';
import { THEME } from '../theme';

const OpenURLButton = ({url, children, styles}) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Error: ${url} is not supported!`);
        }
    }, [url]);

    console.log(styles, 'styleee =>');

    return (
        <Pressable style={{...styles}} onPress={handlePress}>
            <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'open-bold'}}>{children}</Text>
        </Pressable>
    )
}

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>It is React Native application like a blog, for posts and etc.</Text>
            <Text>Application version <Text style={styles.version}>1.1.2</Text></Text>

            <OpenURLButton styles={styles.link} url={'https://github.com/sVarlog'}>sVarlog</OpenURLButton>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    version: {
        fontFamily: 'open-bold'
    },
    link: {
        backgroundColor: '#f2f2f2',
        width: 55,
        justifyContent: 'center',
        marginTop: 50,
        borderBottomWidth: 2,
        paddingBottom: 5,
        borderColor: THEME.MAIN_COLOR
    }
});