import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DATA } from '../data';
import { PostList } from '../components/PostList';


export const BookmarkedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('PostPage', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }

    const data = DATA.filter(post => post.booked)

    return (
        <View style={styles.center}>
            <PostList data={data} onOpen={openPostHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        width: '100%'
    }
});