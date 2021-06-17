import axios from 'axios';
import { ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_DETAIL_FAIL } from '../types.js';


export const getOrderById = (id) => async(dispatch, getState) => {
    try{
        dispatch({
        type: ORDER_DETAIL_REQUEST
    })

    const token = getState().user.userInfo.token;
    const config = {
        headers: {
            authorization: `bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const {data} = await axios.get(`/order/${id}`, config)
    dispatch({
        type: ORDER_DETAIL_SUCCESS,
        payload: data
    })
    }catch(error) {
        dispatch({
            type: ORDER_DETAIL_FAIL,
            payload: error.response.data.msg
        })
    }

}