import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGOUT_SUCCESS, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCESS} from '../types';


export default (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return {
            ...state,
          loading: true,
        };
      case USER_LOGIN_SUCCESS:
        return {
            ...state,
          loading: false,
          userInfo: action.payload,
        };
        case USER_LOGOUT_SUCCESS:
        return {
          state: {}
        };
        case USER_REGISTER_REQUEST :
            return {
                ...state,
                loading: true
            }
            case USER_REGISTER_SUCCESS :
            return {
                ...state,
                userInfo: action.payload,
                loading: false
            }
            case GET_USER_PROFILE_REQUEST:
              return {
                ...state,
                loading: true
              }
            case GET_USER_PROFILE_SUCESS: 
            return {
              ...state,
              loading: false,
              userProfile: action.payload,
            }
        default :
        return {
            ...state
        }
    }
}