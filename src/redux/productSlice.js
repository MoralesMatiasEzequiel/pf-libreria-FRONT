import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productsByName: [],
        detail: {},
        pag: 1
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
        },
        nextpageState: (state, action) => {
            state.pag = state.pag + 1
        },
        backPageState: (state, action) => {
            state.pag = state.pag - 1
        },
        nextTwopageState: (state, action) => {
            state.pag = state.pag + 2
        },
        backTwoPageState: (state, action) => {
            state.pag = state.pag - 2
        }
    }
})

export const { getAllProducts, getProductById, getProductsByName, nextpageState, backPageState, nextTwopageState, backTwoPageState } = productSlice.actions

export default productSlice.reducer 