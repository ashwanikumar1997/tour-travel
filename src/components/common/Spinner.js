/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:49:52
 * @modify date 2019-09-03 10:49:52
 * @desc [description]
 */
import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
    return (
        <div>
            <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading ..." />
        </div>
    );
}