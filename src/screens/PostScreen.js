import React from 'react';
import { View, StyleSheet, Image, Text, Button, ScrollView, Alert } from 'react-native';
import { DATA } from '../data';
import { THEME } from '../theme';

export const PostScreen = ({navigation, route}) => {
    const postId = route.params.postId;

    const post = DATA.find(el => el.id === postId);

    const removeHandler = () => {
        Alert.alert(
            "Post delete",
            "Are you sure about this?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    style: 'destructive',
                    onPress: () => console.log("OK Pressed") 
                }
            ]
        );
    }

    return (
        <ScrollView style={styles.center}>
            <Image source={{uri: post.img}} style={styles.img} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
});