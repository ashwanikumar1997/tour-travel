/**
 * 
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:13
 * @modify date 2019-09-03 10:56:13
 * @desc [description]
 * 
**/


import { FEED_LOADING, GET_FEED } from '../actions/types';

const initialState = {
    feed: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FEED_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_FEED:
            return {
                ...state,
                feed: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
