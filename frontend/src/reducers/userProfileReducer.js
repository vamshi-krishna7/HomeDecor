import { GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCESS} from '../types';


export default (state = {}, action) => {
    switch (action.type) {
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