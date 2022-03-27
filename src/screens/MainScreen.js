import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PostList } from '../components/PostList';
import { DATA } from '../data';

export const MainScreen = (props) => {
    const openPostHandler = (post) => {
        props.navigation.push('PostPage', {postId: post.id, date: post.date});
    }

    return (
        <View style={styles.center}>
            <PostList data={DATA} onOpen={openPostHandler} />

        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
      },
    wrapper: {
        flex: 1
    }
});