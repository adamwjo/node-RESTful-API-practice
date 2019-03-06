import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} from './types';

export const getProducts = () => {
    return {
        type: GET_PRODUCTS
    };
};