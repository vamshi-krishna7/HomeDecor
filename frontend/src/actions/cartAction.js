import axios from 'axios';
import { CART_ADD_ITEM } from '../types.js';

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const res = await axios.get(`/products/${id}`)
    
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            productId: res.data._id,
            ...res.data,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
