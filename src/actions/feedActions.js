/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:48:16
 * @modify date 2019-09-03 10:48:16
 * @desc [description]
 **/

import axios from "axios";
import { GET_FEED, FEED_LOADING } from "./types";
export const getCurrentFeed = () => (dispatch) => {
  dispatch(setFeedLoading());
  axios
    .get("/places")
    .then(function (res) {
      dispatch({
        type: GET_FEED,
        payload: res.data,
      });
    })
    .catch(function (err) {
      // console.log(err);
      dispatch({
        type: GET_FEED,
        payload: {},
      });
    });
};

export const setFeedLoading = () => {
  return {
    type: FEED_LOADING,
  };
};
