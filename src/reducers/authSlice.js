/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:05
 * @modify date 2023-11-08 09:56:05 ashwani kumar madhan
 * @desc [description]
 */
// import { SET_CURRENT_USER } from "../actions/types";
// import isEmpty from "../validation/is-empty";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userData: null,
};

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case SET_CURRENT_USER:
//             return {
//                 ...state,
//                 isAuthenticated: !isEmpty(action.payload),
//                 user: action.payload
//             };
//         default:
//             return state;
//     }
// }

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
