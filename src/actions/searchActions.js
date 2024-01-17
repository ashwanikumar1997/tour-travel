/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:48:25
 * @modify date 2019-09-03 10:48:25
 * @desc [description]
 */
import axios from 'axios';
import { SEARCH_RESULTS } from './types';

export const getSearchResults = query => dispatch => {
    axios
        .get(`/places?param=${query}`)
        .then(res => {
            // Save to localStorage
            const data = res.data;
            //console.log(data);
            dispatch(setResults(data));
            // Set token to localstorage
            //localStorage.setItem('jwtToken', token);
            // set token to Auth header
            //setAuthToken(token);
            // Decode token to get user data
            //const decoded = jwt_decode(token);
            //Set current user
            //dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: SEARCH_RESULTS,
                payload: err.response.data
            });
        });
};

// Set logged in user
export const setResults = data => {
    return {
        type: SEARCH_RESULTS,
        payload: data
    };
};


// func globalSearch(termToSearch: String, completion: @escaping (_ success: Bool, _ object: AnyObject?) -> ()) {
//     let escapedString: String = encodeUrlValue(termToSearch)
//
//     var path: String = "feeds/search?q=\(escapedString)"
//
//     if !PostSingleton.sharedInstance.lat.isEmpty {
//         path = "\(path)&latlng=\(PostSingleton.sharedInstance.lat),\(PostSingleton.sharedInstance.lon)"
//     } else {
//         path = "\(path)&latlng=0,0"
//     }
//
//     path = path.replacingOccurrences(of: "\n", with: "")
//     path = path.replacingOccurrences(of: " ", with: "+")
//     get(request: clientURLRequest(path: path, params: nil)) { (success, object) -> () in
//         DispatchQueue.global().async {
//         completion(success, object)
//     }
//     }
// }
//
// func getCategories(completion: @escaping (_ success: Bool, _ object: AnyObject?) -> ()) {
//     get(request: clientURLRequest(path: "categories", params: nil)) { (success, object) -> () in
//         DispatchQueue.global().async {
//         completion(success, object)
//     }
//     }
// }
//
// func searchCategories(term: String, completion: @escaping (_ success: Bool, _ object: AnyObject?) -> ()) {
//     let termToSearch: String = encodeUrlValue(term)
//     let path: String = "categories/search?q=\(termToSearch)"
//
//     get(request: clientURLRequest(path: path, params: nil)) { (success, object) -> () in
//         DispatchQueue.global().async {
//         completion(success, object)
//     }
//     }
// }
//
// func getPlaces(term: String, completion: @escaping (_ success: Bool, _ object: AnyObject?) -> ()) {
//     let termToSearch: String = encodeUrlValue(term)
//     var path: String = "places/search?q=\(termToSearch)"
//
//     if !PostSingleton.sharedInstance.lat.isEmpty {
//         path = "\(path)&latlng=\(PostSingleton.sharedInstance.lat),\(PostSingleton.sharedInstance.lon)"
//     }
//
//     get(request: clientURLRequest(path: path, params: nil)) { (success, object) -> () in
//         DispatchQueue.global().async {
//         completion(success, object)
//     }
//     }
// }
