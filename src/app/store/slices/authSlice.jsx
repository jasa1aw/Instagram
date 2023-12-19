import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { END_POINT } from '@/config/end_point';
import { jwtDecode } from 'jwt-decode';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    currentUser: null, 
    tokenExt: 0
  },
  reducers: {
    authorize: (state, action) => {
        const decoded = jwtDecode(action.payload.token)
        state.currentUser = {
          id: decoded.id,
          email: decoded.email,
          full_name:  decoded.full_name,
          username: decoded.username,
          phone: decoded.phone,
        }
        state.isAuth = true;

        state.tokenExt = decoded.exp
    },
    logOut: (state) => {
        state.isAuth = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const {authorize, logOut} = authSlice.actions

export const SignUp = (email, full_name, username, password) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signup`, {
    email,
    full_name,
    username,
    password
  })
}

export const LogIn = (email, password) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signin`, {
    email,
    password
  }).then(res => {
    // console.log(res.data);
    dispatch(authorize(res.data))
  })
}

export default authSlice.reducer