// import axios from "axios";

import { pushProductOnCart, removeProductFromCart } from "./CartSlice";

export const addProductOnCart = (product) => {
    return (dispatch) => {
        dispatch(pushProductOnCart(product));
    };
};

export const deleteProductFromCart = (id) => {
    return (dispatch) => {
        dispatch(removeProductFromCart(id));
    };
};