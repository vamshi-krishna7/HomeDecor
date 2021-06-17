import { ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_DETAIL_FAIL } from '../types.js';


export default (state ={loading: true}, action) => {

    switch(action.type) {
        case ORDER_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_DETAIL_FAIL:
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