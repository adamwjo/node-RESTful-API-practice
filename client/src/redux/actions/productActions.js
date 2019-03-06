import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from './types';
import Axios from 'axios';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    Axios
        .get('/products')
        .then(res =>
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        )
};



export const addProduct = product => dispatch => {
    Axios.post('/products', product).then(res =>
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        })
    );
};


export const deleteProduct = (id) => dispatch => {
    //must pass in id because redux must know exactly
    //which "product" to deletes

    Axios.delete(`/products/${id}`).then(res => dispatch({
        type: DELETE_PRODUCT,
        payload: id
    }))
};


export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
}