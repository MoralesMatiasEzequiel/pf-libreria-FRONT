import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        productsOnCart: [],
    },
    reducers: {
        pushProductOnCart: (state, action) => {
            const productExists = state.productsOnCart.find(el => el._id === action.payload._id)
            if (!productExists) {
                state.productsOnCart = [...state.productsOnCart, action.payload]
            }
        },
        removeProductFromCart: (state, action) => {
            state.productsOnCart = state.productsOnCart.filter(el => el._id !== action.payload)
        }
    }
})


export const { pushProductOnCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer 