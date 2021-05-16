import {ADD_ALERT_MESSAGE, REMOVE_ALERT_MESSAGE} from '../types';
import { v4 as uuidv4 } from 'uuid';


export const alert = (message, variant) => (dispatch) => {
    const id = uuidv4()
        dispatch({
            type: ADD_ALERT_MESSAGE,
            payload: {
                message,
                variant,
                id
            }
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT_MESSAGE,
            payload: id 
        }), 5000)
}