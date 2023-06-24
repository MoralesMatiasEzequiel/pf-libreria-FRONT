import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsOnCart: [],
        paymentLink: '',
        clientInfo: {},
        shipmentInfo: {}
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
        }
        
    }
})


export const { pushProductOnCart, removeProductFromCart, postOrderCreated, setClientInfo ,newCartState } = cartSlice.actions

export default cartSlice.reducer 