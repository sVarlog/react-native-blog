import React, {useCallback, useEffect} from 'react';
import { View, StyleSheet, Image, Text, Button, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removePost, toggleBooked } from '../store/actions/post';
import { THEME } from '../theme';

export const PostScreen = ({navigation, route}) => {
    const postId = route.params.postId;
    const dispatch = useDispatch();

    const post = useSelector(state => state.post.allPosts.find(el => el.id === postId));

    const booked = useSelector(state => state.post.bookedPosts.find(el => el.id === postId));

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(postId));
    }, [dispatch, postId]);

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
                    onPress: () => {
                        navigation.goBack()
                        dispatch(removePost(postId));
                    }
                }
            ]
        );
    }

    useEffect(() => {
        navigation.setParams({toggleHandler});
    }, [toggleHandler]);

    useEffect(() => {
        if (booked) {
            navigation.setParams({booked});
        }
    }, [booked]);

    if (!post) {
        return null;
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