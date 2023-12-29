import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from '@/config/end_point';

export const storySlice = createSlice({
    name:"story",
    initialState:{
        stories:[],
    },
    reducers:{
        setMyStories:(state,action) => {
            state.stories = action.payload.stories
        },
        handleDeletedStory:(state, action) => {
            let stories = [...state.stories]
            stories = stories.filter(item => item.id !== action.payload)
        },
    }
})
export const {setMyStories, handleDeletedStory} = storySlice.actions



export const getMyStories = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/userStoriesById`)
        dispatch(setMyStories({stories:res.data}))
        // console.log('res' + res);
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }
}



export const CreateStory = (data) => async(dispatch) => {
    let form = new FormData()
    form.append('video', data)
    axios.post(`${END_POINT}/api/post/newStory`,form).then((res) => {
        dispatch(getMyStories())
    }).catch((error) =>{
        console.log(error);
    })
}


export const deleteStory = (id) => async(dispatch) =>{
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