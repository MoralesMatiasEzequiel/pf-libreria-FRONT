import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        productSee: [],
        branes: [],
        brandSelected: [],
        productsOnSale: [],
        productsOnRating: [],
        productsExist: false,
        detail: {},
        subCategories: [],
        pag: 1
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload
            state.productSee = action.payload
            state.productsExist = true
            state.branes = []
            state.brandSelected = []
            state.subCategories = []
        },
        getProductById: (state, action) => {

            state.detail = state.products.filter(pro => pro.id === action.payload)
            state.productsExist = true
            state.subCategories = []
        },
        getProductsByName: (state, action) => {
            state.pag = 1
            state.branes = []
            state.brandSelected = []
            state.subCategories = []

            if (!action.payload) {
                state.productSee = []
                state.productsExist = false;
            } else {
                state.productSee = action.payload
                state.productsExist = true;
            }
        },
        getProductsBySubcategory: (state, action) => {
            state.pag = 1
            state.branes = []
            state.brandSelected = []
            if (!action.payload) {
                state.productsExist = false;
            } else {
                state.productSee = action.payload
                state.productsExist = true;
            }
        },
        FiltSubCategoriesState: (state, action) => {
            state.subCategories = action.payload
            
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
        },
        orderByAzState: (state, action) => {
            state.pag = 1

            state.productSee = state.productSee.sort((a, b) => {
                const noa = a.name.toLowerCase();
                const noe = b.name.toLowerCase();

                if (noa < noe) {
                    return -1;
                }
                if (noa > noe) {
                    return 1;
                }
                return 0;
            })
        },
        orderByZaState: (state, action) => {
            state.pag = 1

            state.productSee = state.productSee.sort((a, b) => {
                const noa = a.name.toLowerCase();
                const noe = b.name.toLowerCase();

                if (noa < noe) {
                    return 1;
                }
                if (noa > noe) {
                    return -1;
                }
                return 0;
            })
        },
        orderPriceToLowState: (state, action) => {
            state.pag = 1

            state.productSee = state.productSee.sort((a, b) => a.price - b.price)
        },
        orderPriceToUpState: (state, action) => {
            state.pag = 1

            state.productSee = state.productSee.sort((a, b) => b.price - a.price)
        },
        upperBrandsState: (state, action) => {
            state.branes = [...state.branes, action.payload]

        },
        upperBrandsSelectedState: (state, action) => {
            state.brandSelected = action.payload

        },
        getProductsOnSale: (state, action) => {
            state.productsOnSale = action.payload
        },
        getProductsOnRating: (state, action) => {
            state.productsOnRating = action.payload
        },
        saveProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { getAllProducts, getProductById, getProductsByName, getProductsBySubcategory, nextpageState, backPageState, nextTwopageState, backTwoPageState, orderByAzState, orderByZaState, orderPriceToLowState, orderPriceToUpState, getProductsOnSale, getProductsOnRating, upperBrandsState, upperBrandsSelectedState , FiltSubCategoriesState, saveProducts } = productSlice.actions

export default productSlice.reducer 