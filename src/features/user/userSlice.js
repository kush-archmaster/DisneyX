import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: '',
    email: '',
    photo: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUserLogin: (state,action) =>{
             state.name = action.payload.name;
             state.email = action.payload.email;
             state.photo = action.payload.photo;
        },

        setSignOut: (state) =>{
             state.name = null;
             state.email = null;
             state.photo = null;
        }
    }
})

//actions
export const {setUserLogin, setSignOut} = userSlice.actions;

//state
export const selectUsername = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectPhoto = (state) => state.user.photo;

//reducer
export default userSlice.reducer;