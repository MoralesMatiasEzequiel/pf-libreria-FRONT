import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsOnCart: [],
        paymentLink: ''
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
    }
})


export const { pushProductOnCart, removeProductFromCart, postOrderCreated } = cartSlice.actions

export default cartSlice.reducer 