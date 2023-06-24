import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        postedUser: false,
        currentUser: {}
    },
    reducers: {
        postUser: (state, action) => {
            const { userCreated, newUser } = action.payload;
            state.postedUser = userCreated;
            state.currentUser = newUser;
        } 
    }
})

export const { postUser } = userSlice.actions

export default userSlice.reducer