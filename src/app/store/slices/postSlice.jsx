import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from '@/config/end_point';

export const postSlice = createSlice({
    name:"post",
    initialState:{
        posts:[]
    },
    reducers:{
        setMyPosts:(state,action) => {
            state.posts = action.payload.posts
        },
        appendMyPosts:(state,action) => {
            state.posts = [...state.posts,...action.payload.posts]
        },
        

    }
})
export const {setMyPosts, appendMyPosts} = postSlice.actions



export const getMyPosts = () => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyPosts({posts:res.data}))
        console.log('res' + res);
    } catch (error) {
        alert("Ошибка при запросе пожалуйста сообщите об ошибке")
    }

}

export const CreatePost = (data) => async(dispatch) => {
    axios.post(`${END_POINT}/api/post/newPost`, data).then((res) => {
        dispatch(appendMyPosts({posts:res.data}))
        console.log('Server response:', res.data);
    }).catch((error) => {
        console.error('Error submitting form:', error);
    });
}


export default postSlice.reducer