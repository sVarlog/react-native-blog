import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";

const initialState = {
    allPosts: [],
    bookedPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state, 
                allPosts: action.payload, 
                bookedPosts: action.payload.filter(el => el.booked)
            };
        case TOGGLE_BOOKED:
            const allPosts = state.allPosts.map(el => {
                if (el.id === action.payload) {
                    el.booked = !el.booked;
                }
                return el;
            });

            return {
                ...state,
                allPosts,
                bookedPosts: allPosts.filter(el => el.booked)
            }
        case REMOVE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(el => el.id !== action.payload),
                bookedPosts: state.bookedPosts.filter(el => el.id !== action.payload),
            }
        case ADD_POST:
            return {
                ...state,
                allPosts: [{...action.payload}, ...state.allPosts]
            }
        default:
            return state;
    }
}