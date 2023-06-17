import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productsCopy: [],
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
            state.productsCopy = action.payload
        },
        removeProductsCopy: (state, action) => {
            state.productsCopy = []
        }
    }
})

export const { getAllProducts, getProductById, getProductsByName, removeProductsCopy } = productSlice.actions

export default productSlice.reducer 