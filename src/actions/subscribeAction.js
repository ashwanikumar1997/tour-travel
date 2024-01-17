import { SUBSCRIBE_EMAIL,SUBSCRIBE_LOADING } from './types';
import axios from 'axios';


export const getSubscribe = () => dispatch => {
    dispatch(setSubscribeLoading());
    axios
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