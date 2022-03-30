import * as FileSystem from 'expo-file-system';
import { DB } from "../../db";
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";

export const loadPosts = () => {
    return async (dispatch) => {
        const posts = await DB.getPosts();

        dispatch({
            type: LOAD_POSTS,
            payload: posts
        });
    }
}

export const toggleBooked = (post) => {
    return async (dispatch) => {
        await DB.updatePost(post);

        dispatch({
            type: TOGGLE_BOOKED,
            payload: post.id
        });
    }
}

export const removePost = (id) => {
    return async (dispatch) => {
        await DB.removePost(id);

        dispatch({
            type: REMOVE_POST,
            payload: id
        })
    }
}

export const addPost = (post) => {
    return async (dispatch) => {
        const fileName = post.img.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                to: newPath,
                from: post.img
            });
        } catch (err) {
            console.log('Error: ', err);
        }

        const payload = {...post, img: newPath};

        const id = await DB.createPost(payload);

        payload.id = id;

        dispatch({
            type: ADD_POST,
            payload
        });   
    }
}