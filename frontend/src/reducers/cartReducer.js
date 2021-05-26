import { CART_ADD_ITEM, CART_REMOVE_ITEM, SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from '../types.js'

const initialState = {
    cartItems: [],
    shippingAddress: {},
    paymentMethod: ""
}


export default (state=initialState, action) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload;
        const existItem = state.cartItems.find(
          (x) => x.productId === item.productId
        );

        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.productId === existItem.productId ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
      case CART_REMOVE_ITEM:
        const Items = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
        return {
          ...state,
          cartItems: [...Items],
        };
      case SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload,
        };
      case SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        };
      default:
        return {
          ...state,
        };
    }
}

