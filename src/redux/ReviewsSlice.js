import { createSlice } from "@reduxjs/toolkit";

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        usersReviews: [],
    },
    reducers: {
        getReviewsReducer: (state, action) => {
            state.usersReviews = action.payload
        },
        createdReview: (state, action) => {
            state.usersReviews = [ ...state.usersReviews, action.payload]
        }
    }
})


export const { getReviewsReducer, createdReview } = reviewsSlice.actions

export default reviewsSlice.reducer 