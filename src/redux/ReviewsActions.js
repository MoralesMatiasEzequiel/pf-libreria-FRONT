import axios from "axios";

import { getReviewsReducer, createdReview } from "./ReviewsSlice";

export const getReviews = () => {
    return async (dispatch) => {
        const { data } = await axios.get("/review");
        dispatch(getReviewsReducer(data));
    };
};

export const postReviews = (review) => {
    return async (dispatch) => {
        const { data } = await axios.post("/review", review);
        dispatch(createdReview(data));
    };
};