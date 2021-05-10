import {combineReducers} from 'redux';
import productReducer from './productReducer';
import productInfoReducer from './productInfoReducer';

export default combineReducers({
    productList: productReducer,
    productInfo: productInfoReducer
})