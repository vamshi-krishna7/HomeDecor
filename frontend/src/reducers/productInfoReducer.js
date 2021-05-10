import { GET_PRODUCT_INFO, SET_LOADING } from '../types.js'

const initialState = {
    productInfo: [],
    reviews: [],
    loading: null
}

export default (state=initialState, action) => {

    switch(action.type) {
        case  GET_PRODUCT_INFO:
            return {
                loading: false,
                productInfo: action.payload
        }
        case SET_LOADING: 
        return {
            ...state,
            loading: true
        }
        default: 
            return {
                ...state
        }
    }
}