import { createStore, combineReducers } from "redux"
import { postReducer } from "./reducers/post";

const rootReducer = combineReducers({
    post: postReducer
})

export const store = createStore(rootReducer);