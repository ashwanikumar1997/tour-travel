import { SUBSCRIBE_EMAIL,SUBSCRIBE_LOADING } from './types';
import axiosInstance from '../App/AxiosInstance';


export const getSubscribe = () => dispatch => {
    dispatch(setSubscribeLoading());
    axiosInstance
        .get('/accounts/me')
        .then(res =>
            dispatch({
                type: SUBSCRIBE_EMAIL,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: SUBSCRIBE_EMAIL,
                payload: {}
            })
        );
};

export const setSubscribeLoading = () => {
    return {
        type: SUBSCRIBE_LOADING
    };
};