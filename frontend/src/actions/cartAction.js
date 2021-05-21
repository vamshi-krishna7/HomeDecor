import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, SAVE_SHIPPING_ADDRESS } from '../types.js';

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

export const removeFromCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.removeItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (address, city, pincode) => async(dispatch, getState) => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: {address, city, pincode}
    })

    localStorage.setItem('shippingAddress', JSON.stringify(getState().cart.shippingAddress))
}