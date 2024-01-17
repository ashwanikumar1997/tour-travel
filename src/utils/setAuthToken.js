/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:41
 * @modify date 2019-09-03 10:56:41
 * @desc [description]
 */
import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common['x-access-token'] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['x-access-token'];
    }
};

export default setAuthToken;
