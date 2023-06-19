import axios from "axios";
import { getAllProducts, getProductById, getProductsByName, getProductsBySubcategory, nextpageState, backPageState, nextTwopageState, backTwoPageState ,orderByAzState, orderByZaState, orderPriceToLowState, orderPriceToUpState} from "./productSlice";

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
      try {
        const { data } = await axios.get(`/product?name=${name}`);
        dispatch(getProductsByName(data));
      } catch (error) {
        const data = false;
        dispatch(getProductsByName(data));
        console.log('no hay data');
      }
    };
};

export const getAllProductsBySubcategory = (subcategory) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/product?subcategories=${subcategory}`);
            dispatch (getProductsBySubcategory(data));
        } catch (error) {
            const data = false;
            dispatch(getProductsBySubcategory(data));
            console.log('no hay data');
        }
    }
}
// --------------------------paginado
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
// ------------------------ordenamiento
export const orderByAZ = () => {
    return (dispatch) => {
        dispatch(orderByAzState());
    };
};
export const orderByZA = () => {
    return (dispatch) => {
        dispatch(orderByZaState());
    };
};
export const orderPriceToLow = () => {
    return (dispatch) => {
        dispatch(orderPriceToLowState());
    };
};
export const orderPriceToUp = () => {
    return (dispatch) => {
        dispatch(orderPriceToUpState());
    };
};