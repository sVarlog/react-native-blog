import React, {useState, useRef} from 'react';
import { View, Image, ScrollView, Button, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { PhotoPicker } from '../components/PhotoPicker';
import { addPost } from '../store/actions/post';

import { THEME } from '../theme';

export const CreateScreen = ({navigation}) => {
    const [text, setText] = useState('');
    const imgRef = useRef();

    const dispatch = useDispatch();

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img: imgRef.current,
            booked: false
        }

        dispatch(addPost(post));

        setText('');

        navigation.navigate('BlogPage');
    }

    const photoPickHandler = (uri) => {
        imgRef.current = uri;
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <TextInput 
                        style={styles.textArea}
                        placeholder="Enter post description"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button 
                        title="Publish" 
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler} 
                        disabled={!text || !imgRef.current}
                    />
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