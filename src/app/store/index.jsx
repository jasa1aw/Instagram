import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import postReducer from './slices/postSlice'
import storyReducer from './slices/storySlice'
import AllComments from './slices/commentSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        story: storyReducer,
        comment: AllComments,
    },
})