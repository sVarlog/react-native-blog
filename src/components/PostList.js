import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Post } from './Post';

export const PostList = ({data = [], onOpen}) => {
    if (data.length === 0) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>No post yet...</Text>
            </View>
        );
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={
                    ({item}) => <Post post={item} onOpen={onOpen} />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 18
    }
});
