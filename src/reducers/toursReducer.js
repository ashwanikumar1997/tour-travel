/**
 * 
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:13
 * @modify date 2019-09-03 10:56:13
 * @desc [description]
 * 
**/

import { TOURS_LOADING, GET_TOP_TOURS } from '../actions/types';
const initialState = {
    tours: {},
    loading: false
};

export default function (state = initialState, action) {
	
    switch (action.type) {
        case TOURS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TOP_TOURS:
            return {
                ...state,
                tours: action.payload,
                loading: false
            };
        default:
            return state;
    }
}