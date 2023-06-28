import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: {}
    },
    reducers: {
        postUser: (state, action) => {
            state.currentUser = action.payload;
        } 
    }
})

export const { postUser } = userSlice.actions

export default userSlice.reducer