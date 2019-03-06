import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from './types';

export const getProducts = () => {
    return {
        type: GET_PRODUCTS
    };
};

export const deleteProduct = (id) => {
    //must pass in id because redux must know exactly
    //which "product" to deletes
    return {
        type: DELETE_PRODUCT,
        payload: id
    };
};

export const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
}