import {combineReducers} from "redux";

import {usersReducer} from "../reducers/users.reducer";
import {commentsReducer} from "../reducers/comments.reducer";
import {postsReducer} from "../reducers/posts.reducer";

const reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
});

export {
    reducer
}