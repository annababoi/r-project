import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService, userService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
        deleteCurrentPost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index,1);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.posts = action.payload
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.currentPost = action.payload
            })
});

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);
const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const {reducer: postReducer, actions: {setCurrentPost, deleteCurrentPost}} = postSlice;

const postActions = {
    getAll,
    getById,
    setCurrentPost,
    deleteCurrentPost
}

export {
    postActions,
    postReducer
}