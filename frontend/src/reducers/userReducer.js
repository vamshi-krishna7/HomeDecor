import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_REQUEST,USER_LOGIN_ERROR, USER_REGISTER_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_ERROR} from '../types';

// const initialState= {
//   error: null
// }

// export default (state = {}, action) => {
//     switch (action.type) {
//       case USER_LOGIN_REQUEST:
//         return {
//           ...state,
//           user: {loading: true}
//         };
//       case USER_LOGIN_SUCCESS:
//         return {
//           ...state,
//           user: {
//             userInfo: action.payload, loading: false
//           }
//         }
//       case USER_LOGIN_ERROR:
//               return {
//                 ...state,
//                 user: {
//                   loading: false, error: action.payload
//                 }
//               }
//       case USER_LOGOUT_SUCCESS:
//           return {
//             ...state
//           };
//       default: 
//           return state
//       }
//   }

  
//   case USER_REGISTER_REQUEST :
//     return {
//         ...state,
//         userIn: { ...state.user, loading: true, error: null}
//     }
    
//     case USER_REGISTER_SUCCESS :
//     return {
//       ...state,
//       userIn: { ...state.user, userInfo: action.payload, loading: false, error: null}
//     }
// default :
// return {
//     ...state
// }


export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
          ...state,
        loading: true,
        error: null
      };
    case USER_LOGIN_SUCCESS:
      return {
          ...state,
        loading: false,
        userInfo: action.payload,
        error: null
      };
      case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: null
      }
      case USER_LOGIN_ERROR:
      case USER_REGISTER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      case USER_REGISTER_REQUEST :
          return {
              ...state,
              loading: true,
              error: null
          }
          case USER_REGISTER_SUCCESS :
          return {
              ...state,
              userInfo: action.payload,
              loading: false,
              error: null
          }
      default :
      return {
          ...state
      }
  }
}