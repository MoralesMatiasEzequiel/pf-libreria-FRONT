import axios from "axios";
import { getAllProducts, getProductById, getProductsByName } from "./productSlice";


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