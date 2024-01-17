/**
 * 
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:13
 * @modify date 2019-09-03 10:56:13
 * @desc [description]
 * 
**/

import { SUBSCRIBE_EMAIL,SUBSCRIBE_LOADING } from '../actions/types';
const initialState = {
    subscribe: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SUBSCRIBE_LOADING:
            return {
                ...state,
                loading: true
            };
        case SUBSCRIBE_EMAIL:
            return {
                ...state,
                subscribe: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
