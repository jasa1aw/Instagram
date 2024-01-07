import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from '@/config/end_point';

export const likeSlice = createSlice({
    name:"like",
    initialState:{
        likes:[]
    },
    reducers:{
        setPostLikes:(state,action) => {
            state.likes = action.payload.likes
        },
        appendPostLikes:(state,action) => {
            state.likes = [...state.likes, action.payload.likes]
        },
        appendCommentLikes:(state,action) => {
            state.likes = [...state.likes, action.payload.likes]
        },
        appendStoryLikes:(state,action) => {
            state.likes = [...state.likes, action.payload.likes]
        },
        handleDeletedLike:(state, action) => {
            // let comments = [...state.comments]
            // comments = comments.filter(item => item.id !== action.payload)
            state.likes = state.likes.filter(item => item.id !== action.payload);
        },
    }
})
export const {setPostLikes, appendPostLikes, appendCommentLikes, appendStoryLikes, handleDeletedLike} = likeSlice.actions



export const getLikesOfPost = (id) => async(dispatch) =>{
    console.log(id);
    try {
        const res = await axios.get(`${END_POINT}/api/like/get-likes-by-post/${id}`)
        dispatch(setPostLikes({likes:res.data}))
    } catch (error) {
        alert("Ошибка при запросе like")
    }
}



export const addLikeToPost = (id) => async(dispatch) => {
    console.log(id);
    axios.post(`${END_POINT}/api/like/add-like-to-post/${id}`).then((res) => {
        dispatch(getLikesOfPost(id))
    }).catch((error) =>{
        console.log(`addLike ${error}`);
    })
}

export const getLikesOfComments = (id) => async(dispatch) =>{
    console.log(id);
    try {
        const res = await axios.get(`${END_POINT}/api/like/get-likes-by-comment/${id}`)
        dispatch(setPostLikes({likes:res.data}))
    } catch (error) {
        alert("Ошибка при запросе like")
    }
}



export const addLikeToComment = (commentId) => async(dispatch) => {
    // console.log(id);
    axios.post(`${END_POINT}/api/like/add-like-to-comment/${commentId}`).then((res) => {
        dispatch(getLikesOfComments(commentId))
    }).catch((error) =>{
        console.log(`addLike ${error}`);
    })
}
export const removeLikeComment = (likeId, commmentId) => async(dispatch) =>{
    // console.log(likeId);
    // console.log(postId);
    try {
        const res = await axios.delete(`${END_POINT}/api/like/remove-like/${likeId}`)
        dispatch(handleDeletedLike(likeId))
        dispatch(getLikesOfComments(commmentId))
    } catch (error) {
        console.log(`deleteLike ${error}`);
    }
}

export const deletedLike = (likeId, postId) => async(dispatch) =>{
    console.log(likeId);
    console.log(postId);
    try {
        const res = await axios.delete(`${END_POINT}/api/like/remove-like/${likeId}`)
        dispatch(handleDeletedLike(likeId))
        dispatch(getLikesOfPost(postId))
    } catch (error) {
        console.log(`deleteLike ${error}`);
    }
}

export default likeSlice.reducer