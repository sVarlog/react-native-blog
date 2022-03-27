import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '../components/PostList';
import { loadPosts } from '../store/actions/post';

export const MainScreen = (props) => {
    const openPostHandler = (post) => {
        props.navigation.push('PostPage', {postId: post.id, date: post.date});
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    const allPosts = useSelector(state => state.post.allPosts);

    return (
        <View style={styles.center}>
            <PostList data={allPosts} onOpen={openPostHandler} />
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