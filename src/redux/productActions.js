import axios from "axios";

import { getAllProducts, getProductById, getProductsByName, getProductsBySubcategory, nextpageState, backPageState, nextTwopageState, backTwoPageState, orderByAzState, orderByZaState, orderPriceToLowState, orderPriceToUpState, getProductsOnSale, getProductsOnRating, upperBrandsState, upperBrandsSelectedState, FiltSubCategoriesState, saveProducts, totalPagState, createProductState, productsSalesOnShop, productsRatingOnShop, changeRating } from "./productSlice";

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
            dispatch(getProductsBySubcategory(data));
        } catch (error) {
            const data = false;
            dispatch(getProductsBySubcategory(data));
            console.log('no hay data');
        }
    }
}
export const FiltSubCategories = (name) => {
    return async (dispatch) => {
        dispatch(FiltSubCategoriesState(name));
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
export const totalPag = (pags) => {
    return (dispatch) => {
        dispatch(totalPagState(pags));
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

// -------------------------Filtrado por marca
export const upperBrands = (brand) => {
    return (dispatch) => {
        dispatch(upperBrandsState(brand));
    };
};
export const upperBrandsSelected = (brandes) => {
    return (dispatch) => {
        dispatch(upperBrandsSelectedState(brandes));
    };
};


// ------------------------ACTIONS PARA LOS CAROUSELS
export const getProductsSales = () => {
    return async (dispatch) => {
        const { data } = await axios.get("/product/sale");
        dispatch(getProductsOnSale(data));
    };
};
export const getProductsRating = () => {
    return async (dispatch) => {
        const { data } = await axios.get("/product/rating");
        dispatch(getProductsOnRating(data));
    };
};
export const getProductsOnHome = () => {
    return async (dispatch) => {
        const dataApi = await axios.get("/product/");
        const products = dataApi.data;
        dispatch(saveProducts(products));
    };
};
export const showProductsSalesOnShop = () => {
    return (dispatch) => {
        dispatch(productsSalesOnShop());
    };
};
export const showProductsRatingOnShop = () => {
    return (dispatch) => {
        dispatch(productsRatingOnShop());
    };
};

// --------------------------- add producto

export const createProduct = (product) => {

    return async (dispatch) => {

        try {
            const dataApi = await axios.post("/product", product);

            if (dataApi.name) {
                console.log("creado nais" + dataApi);
                dispatch(createProductState(product))
            }

        } catch (error) {
            alert("NO se creó")
            console.log(error.response.data)
        }

    };
}

// ------------------------- rate product

export const rateProduct = (productId, rating) => {

    return async (dispatch) => {

        let dataToSend = {
            _id: productId,
        };
    
        if (rating === 1) {
            dataToSend.oneStarReviews = 1;
        } else if (rating === 2) {
            dataToSend.twoStarsReviews = 1;
        } else if (rating === 3) {
            dataToSend.threeStarsReviews = 1;
        } else if (rating === 4) {
            dataToSend.fourStarsReviews = 1;
        } else if (rating === 5) {
            dataToSend.fiveStarsReviews = 1;
        }

        try {
            const { data } = await axios.put("/product", dataToSend);

            const dataToSlice = {
                _id: productId,
                rating: data
            }
           
            dispatch(changeRating(dataToSlice));
        } catch (error) {
            console.log(error.message);
        }

    }
}
