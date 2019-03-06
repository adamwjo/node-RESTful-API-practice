import uuid from 'uuid';
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT} from '../actions/types';

const initialState =  {
   products: [
            { id: uuid(), name: 'name1', price: 10},
            { id: uuid(), name: 'name2', price: 11},
            { id: uuid(), name: 'name3', price: 12},
            { id: uuid(), name: 'name4', price: 13}
        ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
            break;
    
        default:
        return state
            break;
    }
}