/**
 * 
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:13
 * @modify date 2019-09-03 10:56:13
 * @desc [description]
 * 
**/

import { TOUR_LOADING, GET_TOUR } from '../actions/types';
const initialState = {
    tour: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOUR_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TOUR:
            return {
                ...state,
                tour: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
