import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGOUT_SUCCESS} from '../types';
import axios from 'axios';

export const loginUser = (email, password) => async(dispatch) => {

    dispatch({
        type: USER_LOGIN_REQUEST,
    });

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const { data } = await axios.post(
        "/user/login",
        { email, password },
        config
    );

    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));

}

export const logoutUser = () => async(dispatch) => {
    dispatch({
        type: USER_LOGOUT_SUCCESS
    });

    localStorage.removeItem('userInfo')
}

export const registerUser = (name, email, password) => async(dispatch) => {
    console.log(name, email, password)
    dispatch({
        type: USER_REGISTER_REQUEST
    })

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const {data} = await axios.post('/user/', {name, email, password}, config)

    dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
    })
    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
}



