import {ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_RESET} from '../types';

const initialState = {
    loading: null
}

export default (state = initialState, action) => {
  switch (action) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        order: {},
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {
        ...state,
        order: {},
      };
    default:
      return {
        ...state,
      };
  }
};