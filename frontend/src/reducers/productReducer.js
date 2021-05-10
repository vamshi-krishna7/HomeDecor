import { GET_ALL_PRODUCTS, SET_LOADING } from '../types.js'

const initialState = {
    products: [],
    loading: true
}

export default (state=initialState, action) => {

    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
                
            }
        case  GET_ALL_PRODUCTS:
            return {
                loading: false,
                products: action.payload
        }
        default: 
            return {
                ...state
            }
    }
}