import { GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCESS, UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS} from '../types';


export default (state = {}, action) => {
    switch (action.type) {
            case GET_USER_PROFILE_REQUEST:
            case UPDATE_USER_PROFILE_REQUEST:
              return {
                ...state,
                loading: true
              }
            case GET_USER_PROFILE_SUCESS: 
            return {
              ...state,
              loading: false,
              userProfileInfo: action.payload
            }
            case UPDATE_USER_PROFILE_SUCCESS: 
            return {
              ...state,
              loading: false,
              success: true,
              userProfileInfo: action.payload
            }
        default :
        return {
            ...state
        }
    }
}