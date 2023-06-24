import axios from "axios";


import { pushProductOnCart, removeProductFromCart, postOrderCreated, setClientInfo,newCartState, setShipmentInfo } from "./CartSlice";

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

export const setClient = (clientInfo) => {
    return (dispatch) => {
        dispatch(setClientInfo(clientInfo));
    };
};


export const newCart= (cart) => {
    return (dispatch) => {
        dispatch(newCartState(cart));
    };
};

export const setShipment = (shipmentInfo) => {
    return (dispatch) => {
        dispatch(setShipmentInfo(shipmentInfo));

    };
};