/**
 * 
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:13
 * @modify date 2019-09-03 10:56:13
 * @desc [description]
 * 
**/

import { PLACE_LOADING, GET_PLACE } from '../actions/types';
const initialState = {
    destinations: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PLACE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PLACE:
            return {
                ...state,
                destinations: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
