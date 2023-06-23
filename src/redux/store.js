import { configureStore } from "@reduxjs/toolkit";
import Products from "./productSlice";
import Cart from "./CartSlice";

export default configureStore({
    reducer:{
        products:Products,
        cart:Cart
    }
})