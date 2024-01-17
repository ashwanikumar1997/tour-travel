/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:08
 * @modify date 2019-09-03 10:56:08
 * @desc [description]
 */
import { GET_ERRORS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
