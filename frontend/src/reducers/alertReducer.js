import { ADD_ALERT_MESSAGE, REMOVE_ALERT_MESSAGE } from '../types.js'

const intialState = {
    alertMessage: []
}

export default (state=intialState, action) => {

    switch (action.type) {
      case ADD_ALERT_MESSAGE:
        return {
          alertMessage: [...state.alertMessage, action.payload],
        };
      case REMOVE_ALERT_MESSAGE:
        const removedAlert = state.alertMessage.filter(
          (msg) => msg.id !== action.payload
        );
        return {
          alertMessage: [...removedAlert],
        };
      default:
        return {
          ...state,
        };
    }
}