import { configureStore } from "@reduxjs/toolkit";
import Products from "./productSlice";
import Cart from "./CartSlice";
import User from "./UserSlice"
import Reviews from "./ReviewsSlice"

export default configureStore({
    reducer:{
        products:Products,
        cart:Cart,
        user:User,
        reviews: Reviews
    }
})