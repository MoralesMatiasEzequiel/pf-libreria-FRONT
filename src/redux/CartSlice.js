import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsOnCart: [],
        paymentLink: '',
        clientInfo: {},
        shipmentInfo: {},
        order: ''
    },
    reducers: {  //Anteriormente Switch
        pushProductOnCart: (state, action) => { 
            const productExists = state.productsOnCart.find(el => el._id === action.payload._id)
            if (!productExists) {
                state.productsOnCart = [...state.productsOnCart, action.payload]
            }
        },
        removeProductFromCart: (state, action) => {
            state.productsOnCart = state.productsOnCart.filter(el => el._id !== action.payload)
        },
        postOrderCreated: (state, action) => { 
            state.productsOnCart = []
            state.paymentLink = action.payload
        },
        setClientInfo: (state, action) => {
            state.clientInfo = action.payload
        },

        newCartState: (state, action) => {
            state.productsOnCart = action.payload
        },
        setShipmentInfo: (state, action) => {
            state.shipmentInfo = action.payload

        },
        sendOrderToBack: (state, action) => {
            state.clientInfo = {}
            state.shipmentInfo = {}
            state.order = action.payload
        }
        
    }
})



export const { pushProductOnCart, removeProductFromCart, postOrderCreated, setClientInfo, setShipmentInfo, newCartState, sendOrderToBack} = cartSlice.actions

export default cartSlice.reducer 