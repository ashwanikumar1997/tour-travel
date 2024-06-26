/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:48:12
 * @modify date 2023-08-04 12:18:12 by ashwani kumar madhan
 * @desc [description]
 */
import axiosInstance from "../App/AxiosInstance";
import setAuthToken from "../utils/setAuthToken";

import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  REGISTER_SUCCESS,
  AGENCY_NAME,
  AUTH_USER_KEY,
  AUTH_ACCESS_TOKEN_KEY,
  AUTH_REFRESH_TOKEN_KEY,
  AUTH_ID_KEY,
  AUTH_ACCOUNT_TYPE,
} from "./types";
import { login } from "../reducers/authSlice";

// export const loginWithFb = (userData, history) => (dispatch) => {
//   axiosInstance
//     .post("/accounts/register", userData)
//     .then(
//       (res) =>
//         function () {
//           // Save to localStorage
//           const { token } = res.data;
//           // Set token to localstorage
//           localStorage.setItem("authToken", token);

//           // Decode token to get user data
//           const decoded = jwt_decode(token);
//           // Set current user
//           let data = localStorage.getItem("authToken");
//           var userToken = jwt_decode(data);
//           var userId = userToken.userId;
//           axiosInstance.get("/profiles/" + userId).then((response) => {
//             var profileJson = JSON.stringify(response);
//             localStorage.setItem("authUser", profileJson);
//             dispatch(setCurrentUser(decoded));
//           });
//         }
//     )
//     .catch(
//       (err) =>
//         function () {
//           console.log("userData");
//           console.log(err);
//           console.log("userData");
//         }
//     );
// };

// Register User start here
export const registerUser = async (userData) => {
  return await axiosInstance.post("/accounts/register", userData);
};

//Login - Get User Token
export const loginUser = async (userData) => {
  const response = await axiosInstance.post("/accounts/login", userData);
  if (response.data) {
    const { accessToken, refreshToken, loggedInUser } = response.data;

    let name = loggedInUser.name;
    let user_Id = loggedInUser._id;
    setAuthToken(accessToken);
    localStorage.setItem(AUTH_ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(AUTH_REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(AUTH_USER_KEY, name);
    localStorage.setItem(AUTH_ID_KEY, user_Id);
    localStorage.setItem(AUTH_ACCOUNT_TYPE, loggedInUser.accountType);
    return loggedInUser;
  }
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  axiosInstance.post("/accounts/logout").then((response) => {
    if (response.status == 200) {
      localStorage.removeItem("jwtToken");
      // Remove auth header for future requests
      setAuthToken(false);
      // Set current user to {} which will also set isAuthenticated to false
      dispatch(setCurrentUser({}));
    }
  });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
export const LoginWithFbAuth = (userData, history) => (dispatch) => {
  let data = {
    provider: userData.provider,
    providerId: userData.providerId,
    providerToken: userData.providerToken,
  };
  axiosInstance.post("/accounts", data).then((res) => {
    const decoded = jwt_decode(res.data.token);
    localStorage.setItem("authToken", res.data.token);
    axiosInstance.get("/profiles/" + decoded.userId).then((response) => {
      var profileJson = JSON.stringify(response);
      localStorage.setItem("authUser", profileJson);
      dispatch(setCurrentUser(decoded));
    });
  });
};

export const getAuthUser = () => {
  try {
    const authUser = localStorage.getItem(AUTH_USER_KEY);
    return authUser;
  } catch (e) {
    return null;
  }
};

export const getAuthUserFullname = () => {
  const user = getAuthUser();

  // console.log(isVerified())
  if (user) return `${user}`;
};

export const Logout = (e) => {
  e.preventDefault();
  if (window.confirm("Are you sure to log out?")) {
    axiosInstance.post("/accounts/logout").then((response) => {
      if (response.status == 200) {
        flushUserSession();
        window.location = "/";
      }
    });
   
  }
};

export const flushUserSession = () => {
  localStorage.removeItem(AUTH_USER_KEY);
  localStorage.removeItem("agency-logo");
  localStorage.removeItem("agency-banner");
  localStorage.removeItem(AUTH_ACCESS_TOKEN_KEY);
  localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
  localStorage.removeItem(AUTH_ID_KEY);
  localStorage.removeItem(AUTH_ACCOUNT_TYPE);
  localStorage.removeItem(AGENCY_NAME);
};
