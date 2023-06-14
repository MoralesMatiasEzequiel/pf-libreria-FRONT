import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        detail: {}
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload
        },
        getProductById: (state, action) => {
            state.detail = state.products.filter(pro => pro.id === action.payload)
        }
    }
})

export const { getAllProducts, getProductById } = productSlice.actions

export default productSlice.reducer 