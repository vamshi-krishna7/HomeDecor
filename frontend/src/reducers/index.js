import {combineReducers} from 'redux';
import productReducer from './productReducer';
import productInfoReducer from './productInfoReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    productList: productReducer,
    productInfo: productInfoReducer,
    cart: cartReducer
})