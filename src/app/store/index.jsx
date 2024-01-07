import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import storyReducer from './slices/storySlice'
import commentReducer from './slices/commentSlice'
import likeReducer from './slices/likeSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        story: storyReducer,
        comment: commentReducer,
        like: likeReducer,
    },
})