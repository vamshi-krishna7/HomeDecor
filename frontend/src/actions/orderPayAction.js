import {ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_RESET} from '../types';



export const OrderPay = (orderId, paymentResult) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST
        })

    const token = getState().user.userInfo.token;
    const config = {
        headers: {
            authorization: `bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    const {data} = await axios.put(`/order/${orderId}/pay`, paymentResult, config)
    dispatch({
        type: ORDER_DETAIL_SUCCESS,
        payload: data
    })
    }catch(error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response.data.msg
        })
    }
}