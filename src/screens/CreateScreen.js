import React, {useState} from 'react';
import { View, Image, ScrollView, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/post';

import { THEME } from '../theme';

export const CreateScreen = ({navigation}) => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const img = 'https://image.shutterstock.com/image-photo/new-york-city-panorama-skyline-600w-1011270001.jpg';

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img,
            booked: false
        }

        dispatch(addPost(post));

        setText('');

        navigation.navigate('BlogPage');
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Image 
                        style={styles.img}
                        source={{uri: img}}
                    />
                    <TextInput 
                        style={styles.textArea}
                        placeholder="Enter post description"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Button title="Publish" color={THEME.MAIN_COLOR} onPress={saveHandler} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: 200
    },
});