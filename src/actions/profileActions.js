/**
 * 
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:48:20
 * @modify date 2019-09-03 10:48:20
 * @desc [description]
 * 
**/

import axiosInstance from '../App/AxiosInstance';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS } from './types';

// GET CURRENT PROFILE
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axiosInstance
        .get('/accounts/me')
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axiosInstance
        .post('', profileData)
        .then(res => history.push('/feed'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};
