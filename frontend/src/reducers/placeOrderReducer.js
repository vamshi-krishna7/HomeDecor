import { PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL } from '../types.js';


export default (state ={}, action) => {

    switch(action.type) {
        case PLACE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload
            }
        case PLACE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                order: null,
                error: action.payload
            }
        default :
            return {
                ...state
            }
    }
}