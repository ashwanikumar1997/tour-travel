/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:50:49
 * @modify date 2019-09-03 10:50:49
 * @desc [description]
 */
import React from 'react';
import isEmpty from '../../validation/is-empty';
const Banner = (props) => {
    var image = '';
    var name = '';
    if (!isEmpty(props.props)) {
        image = props.props.image;
        name = props.props.name;
    }
    return (
        <div id="page_caption" className="hasbg parallax" style={{ backgroundImage: 'url(' + image + ')' }}>
            <div className="overlay_background visible"></div>
            <div className="page_title_wrapper">
                <div className="page_title_inner">
                    <div className="page_title_content">
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;
