import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from '../actions/types';

const initialState =  {
   products: [],
   loading: false
};


export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)

            }
        
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }

        case PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            }
    
        default:

        return state
    }
}