/**
 * @author ashwani Kumar
 * @email ashwanikumar@inimist.com
 * @create date 2019-09-03 10:57:21
 * @modify date 2023-12-03 01:20:29
 * @desc [description]
 */

import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore({
    reducer:rootReducer
});

export default store;
