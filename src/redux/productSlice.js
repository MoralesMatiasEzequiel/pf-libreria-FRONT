import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productsByName: [],
        detail: {}
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload
        },
        getProductById: (state, action) => {
            state.detail = state.products.filter(pro => pro.id === action.payload)
        },
        getProductsByName: (state, action) => {
            state.productsByName = action.payload
        }
    }
})

export const { getAllProducts, getProductById, getProductsByName } = productSlice.actions

export default productSlice.reducer 