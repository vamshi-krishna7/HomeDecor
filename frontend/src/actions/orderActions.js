import axios from 'axios';
import { PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL } from '../types.js';


export const placeOrderAction = (order) => async(dispatch, getState) => {
    try{
        dispatch ({
        type: PLACE_ORDER_REQUEST
    })
    const token = getState().user.userInfo.token
    const config = {
        headers: {
            authorization: `bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }

    const {data} = await axios.post('/order',order, config)
    console.log(data)

    dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: data
    })
    }catch(error) {
        console.error(error)
        dispatch({
            type: PLACE_ORDER_FAIL,
            payload: error.response.data.msg
        })
    }  
}