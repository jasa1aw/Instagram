import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from '@/config/end_point';

export const storySlice = createSlice({
    name:"story",
    initialState:{
        stories:[],
        story:{},
    },
    reducers:{
        setMyStories:(state,action) => {
            state.stories = action.payload.stories
        },
        appendMyStories:(state,action) => {
            state.stories = [...state.stories, action.payload.stories]
        },
        setStoryById:(state, action) => {
            state.story = action.payload.story
        },
        handleDeletedStory:(state, action) => {
            let stories = [...state.stories]
            stories = stories.filter(item => item.id !== action.payload)
        },
    }
})
export const {setMyStories, appendMyStories, setStoryById, handleDeletedStory} = storySlice.actions



export const getMyStories = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyStories({stories:res.data}))
        // console.log('res' + res);
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }
}



export const CreateStory = (data) => async(dispatch) => {
    axios.post(`${END_POINT}/api/post/newStory`, data).then((res) => {
        dispatch(appendMyStories({stories: res.data}))
        console.log('Server response:', res.data);
    }).catch((error) => {
        console.error('Error submitting form:', error);
    });
}


export const getStoryById = (id) => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/userStoriesById/${id}`)
        dispatch(setStoryById({story:res.data}))
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}


export const deletePost = (id) => async(dispatch) =>{
    try {
        const res = await axios.delete(`${END_POINT}/api/post/deleteStory/${id}`)
        dispatch(handleDeletedStory(id))
        dispatch(getMyStories())
        // console.log('res' + res);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

export default storySlice.reducer