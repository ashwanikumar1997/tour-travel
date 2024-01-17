/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:19
 * @modify date 2019-09-03 10:56:19
 * @desc [description]
 */
import { combineReducers } from 'redux';
import authReducer from './authSlice';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import tourReducer from './tourReducer';
import toursReducer from './toursReducer';
import destinationReducer from './destinationReducer';
import placeReducer from './placeReducer';
import feedReducer from './feedReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer,
    feed: feedReducer,
    destinations: destinationReducer,
    tour: tourReducer,
	tours: toursReducer,
    place: placeReducer,
    search: searchReducer
});
