import axios from "axios";

import { pushProductOnCart, removeProductFromCart, postOrderCreated, setClientInfo,newCartState, setShipmentInfo, sendOrderToBack, cleanPaymentLinkState } from "./CartSlice";

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

export const cleanPaymentLink = () => {
    return (dispatch) => {
        dispatch(cleanPaymentLinkState());
    }
}

export const sendOrder = (clientInfo, shipmentInfo, productsOnCart) => {
    return async (dispatch) => {
        let productIds = productsOnCart.map(product => product._id);
        let totalPrice = productsOnCart.reduce((sum, product) => sum + product.price, 0);

        let newOrder = {
            email: clientInfo.email,
            name: clientInfo.name,
            surname: clientInfo.surname,
            phone: clientInfo.phone,
            dni: clientInfo.dni,
            street: shipmentInfo.street,
            number: shipmentInfo.number,
            floor: shipmentInfo.floor,
            apartment: shipmentInfo.apartment,
            province: shipmentInfo.province,
            city: shipmentInfo.city,
            comentary: shipmentInfo.comentary,
            products: productIds,
            finalPrice: totalPrice
        }

        try {
            const orderSent = await axios.post('/orders', newOrder);
            const order = orderSent.data;

            dispatch(sendOrderToBack(order))
        } catch (error) {
            
        }
    };
};