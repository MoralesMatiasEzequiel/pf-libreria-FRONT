import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        postedUser: false
    },
    reducers: {
        postUser: (state, action) => {
            if(action.payload){
                state.postedUser = true
            } else {
                state.postedUser = false
            }
        } 
    }
})

export const { postUser } = userSlice.actions

export default userSlice.reducer