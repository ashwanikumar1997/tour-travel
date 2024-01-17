/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:32
 * @modify date 2019-09-03 10:56:32
 * @desc [description]
 */
import { SEARCH_RESULTS } from '../actions/types';

const initialState = {
    search: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESULTS:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
}
