import axiosInstance from "../App/AxiosInstance";
import { TOURS_LOADING, GET_TOP_TOURS, TOUR_LOADING, GET_TOUR } from "./types";
export const getTopTours = () => (dispatch) => {
  dispatch(setTopToursLoading());
  axiosInstance
    .get("/tours")
    .then(function (res) {
     
      dispatch({
        type: GET_TOP_TOURS,
        payload: res.data,
      });
    })
    .catch(function (err) {
      //  console.log(err);
      dispatch({
        type: GET_TOP_TOURS,
        payload: {},
      });
    });
};

export const setTopToursLoading = () => {
  return {
    type: TOURS_LOADING,
  };
};
//Single tour
export const getTour = (id) => (dispatch) => {
  dispatch(setTourLoading());
  axiosInstance
    .get("/tours/" + id)
    .then(function (res) {
      dispatch({
        type: GET_TOUR,
        payload: res.data,
      });
    })
    .catch(function (err) {
      // console.log(err);
      dispatch({
        type: GET_TOUR,
        payload: {},
      });
    });
};

export const setTourLoading = () => {
  return {
    type: TOUR_LOADING,
  };
};
