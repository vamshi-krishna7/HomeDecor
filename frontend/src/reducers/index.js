import {combineReducers} from 'redux';
import productReducer from './productReducer';
import productInfoReducer from './productInfoReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import userProfileReducer from './userProfileReducer';
import placeOrderReducer from './placeOrderReducer';

export default combineReducers({
    productList: productReducer,
    productInfo: productInfoReducer,
    cart: cartReducer,
    user: userReducer,
    alert: alertReducer,
    userProfile: userProfileReducer,
    placeOrder: placeOrderReducer
})