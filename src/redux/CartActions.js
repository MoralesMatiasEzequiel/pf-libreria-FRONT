import axios from "axios";

import { pushProductOnCart, removeProductFromCart, postOrderCreated } from "./CartSlice";

export const addProductOnCart = (product) => {
    return (dispatch) => {
        dispatch(pushProductOnCart(product));
    };
};

export const createOrder = (productsOnCart) => {

    
        return async (dispatch) => {
            try {
                const newOrder = await axios.post('/mercadopago/create-order', productsOnCart);
                const order = newOrder.data;

            dispatch(postOrderCreated(order))
        }
         catch (error) {
              
    }}
    
}

export const deleteProductFromCart = (id) => {
    return (dispatch) => {
        dispatch(removeProductFromCart(id));
    };
};