import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { END_POINT } from '@/config/end_point';

export const commentSlice = createSlice({
    name:"comment",
    initialState:{
        comments:[],
    },
    reducers:{
        setMyComments:(state,action) => {
            state.comments = action.payload.comments
        },
        appendMyComments:(state,action) => {
            state.comments = [...state.comments, action.payload.comment]
        },
        handleDeletedComment:(state, action) => {
            // let comments = [...state.comments]
            // comments = comments.filter(item => item.id !== action.payload)
            state.comments = state.comments.filter(item => item.id !== action.payload);
        },
    }
})
export const {setMyComments, appendMyComments, handleDeletedComment} = commentSlice.actions



export const getMyComments = (id) => async(dispatch) =>{
    try {
        const res = await axios.get(`${END_POINT}/api/getComments/${id}`)
        if (res.data && Array.isArray(res.data)) dispatch(setMyComments({comments:res.data}))
    } catch (error) {
        alert("Ошибка при запросе comment")
    }
}



export const CreateComment = (data) => async(dispatch) => {
    console.log(data);
    axios.post(`${END_POINT}/api/newComment`, data).then((res) => {
        dispatch(getMyComments(res.data.postId))
    }).catch((error) =>{
        console.log(error);
    })
}


export const deleteComment = (commentId, postId) => async(dispatch) =>{
    // console.log(commentId);
    // console.log(postId);
    try {
        const res = await axios.delete(`${END_POINT}/api/deleteComment/${commentId}`)
        dispatch(handleDeletedComment(commentId))
        dispatch(getMyComments(postId))
        // console.log('res' + res);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

export default commentSlice.reducer