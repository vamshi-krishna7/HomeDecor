import { GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCESS} from '../types';
import axios from 'axios';

export const getUserProfile = () => async(dispatch, getState) => {
    dispatch({
        type: GET_USER_PROFILE_REQUEST
    })

    const token = getState().user.userInfo.token;
    const config = {
        headers: {
            'Content-Type':'application/json',
            authorization: `bearer ${token}` 
        }
    }
    const {data} = await axios.get('/user/profile', config)
    console.log(data)

    dispatch({
        type: GET_USER_PROFILE_SUCESS,
        payload: data
    })
}