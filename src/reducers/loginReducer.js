/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:24
 * @modify date 2019-09-03 10:56:24
 * @desc [description]
 */
import { DISPLAY_LOGIN } from '../actions/types';

const initialState = {
    loginOpen: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DISPLAY_LOGIN:
            return {
                ...state,
                loginOpen: action.payload
            };
        default:
            return state;
    }
}
