/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:57:03
 * @modify date 2019-09-03 10:57:03
 * @desc [description]
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(< App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
