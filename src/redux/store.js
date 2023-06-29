import { configureStore } from "@reduxjs/toolkit";
import Products from "./productSlice";
import Cart from "./CartSlice";
import User from "./UserSlice"
import Favorites from "./favoriteSlice";

export default configureStore({
    reducer:{
        products:Products,
        cart:Cart,
        user:User,
				favorites:Favorites
    }
})