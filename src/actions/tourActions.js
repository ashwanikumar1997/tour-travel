
import axiosInstance from '../App/AxiosInstance';
import { TOUR_LOADING, GET_TOUR } from './types';

export const getTour = (id) => dispatch => {
    dispatch(setTourLoading());
    axiosInstance
        .get('/tours/' + id)
        .then(function (res) {
          
            dispatch({
                type: GET_TOUR,
                payload: res.data
            })
        })
        .catch(function (err) {
            console.log(err);
            dispatch({
                type: GET_TOUR,
                payload: {}
            })
        });
};

export const setTourLoading = () => {
    return {
        type: TOUR_LOADING
    };
};