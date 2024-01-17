/**
 *
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:48:16
 * @modify date 2019-09-03 10:48:16
 * @desc [description]
 *
 **/
import axios from "axios";
import {
  GET_DESTINATION,
  DESTINATION_LOADING,
  PLACE_LOADING,
  GET_PLACE,
} from "./types";
export const getAllDestination = () => (dispatch) => {
  dispatch(setDestinationLoading());
  axios
    .get("/places")
    .then(function (res) {
      dispatch({
        type: GET_DESTINATION,
        payload: res.data,
      });
    })
    .catch(function (err) {
      // console.log(err);
      dispatch({
        type: GET_DESTINATION,
        payload: {},
      });
    });
};

export const setDestinationLoading = () => {
  return {
    type: DESTINATION_LOADING,
  };
};

export const getPlace = (id) => (dispatch) => {
  dispatch(setPlaceLoading());
  axios
    .get("/places/" + id + "/relatedTours")
    .then(function (res) {
      dispatch({
        type: GET_PLACE,
        payload: res.data,
      });
    })
    .catch(function (err) {
      // console.log(err);
      dispatch({
        type: GET_PLACE,
        payload: {},
      });
    });
};

export const setPlaceLoading = () => {
  return {
    type: PLACE_LOADING,
  };
};
