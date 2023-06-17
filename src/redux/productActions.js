import axios from "axios";
import { getAllProducts, getProductById, getProductsByName, nextpageState, backPageState, nextTwopageState, backTwoPageState } from "./productSlice";


export const getProducts = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/product/");
        const products = dataApi.data;
        dispatch(getAllProducts(products));
    };
};

export const getById = (id) => {
    return (dispatch) => {
        dispatch(getProductById(id));
    };
};

export const getAllProductsByName = (name) => {
    return async (dispatch) => {
        const { data } = await axios.get(`/product?name=${name}`);
        dispatch(getProductsByName(data));
    };
};

export const nextPage = () => {
    return (dispatch) => {
        dispatch(nextpageState());
    };
};
export const backPage = () => {
    return (dispatch) => {
        dispatch(backPageState());
    };
};

export const nextTwoPage = () => {
    return (dispatch) => {
        dispatch(nextTwopageState());
    };
};
export const backTwoPage = () => {
    return (dispatch) => {
        dispatch(backTwoPageState());
    };
};
