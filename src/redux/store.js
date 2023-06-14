import { configureStore } from "@reduxjs/toolkit";
import Products from "./productSlice";

export default configureStore({
    reducer:{
        products:Products
    }
})