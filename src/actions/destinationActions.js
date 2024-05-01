/**
 *
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:48:16
 * @modify date 2019-09-03 10:48:16
 * @desc [description]
 *
 **/
import axiosInstance from "../App/AxiosInstance";
import {
  GET_DESTINATION,
  DESTINATION_LOADING,
  PLACE_LOADING,
  GET_PLACE,
} from "./types";
export const getAllDestination = () => (dispatch) => {
  dispatch(setDestinationLoading());
  axiosInstance
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
  axiosInstance
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
