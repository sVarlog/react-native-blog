import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PostList } from '../components/PostList';
import { useSelector } from 'react-redux';


export const BookmarkedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.push('PostPageBooked', {
            screen: 'PostPageBooked',
            postId: post.id,
            date: post.date,
            booked: post.booked
        });
    }

    const bookedPosts = useSelector(state => state.post.bookedPosts);

    return (
        <View style={styles.center}>
            <PostList data={bookedPosts} onOpen={openPostHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        width: '100%'
    }
});