import axios from 'axios';
import { GET_ALL_PRODUCTS, SET_LOADING, GET_PRODUCT_INFO } from '../types.js';



export const getAllProducts = () => async(dispatch) => {
    const res = await axios.get('/products')
    dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
    })
}

export const setLoading = () => {
    console.log('came here')
    return {
        type: SET_LOADING
    }
}

export const getProductInfo = (id) => async(dispatch) => {
    const res = await axios.get(`/products/${id}`)
    dispatch({
        type: GET_PRODUCT_INFO,
        payload: res.data,
    })
}