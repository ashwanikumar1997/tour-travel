/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:49:18
 * @modify date 2019-09-03 10:49:18
 * @desc [description]
 */
import React from 'react';
//import classnames from 'classnames';
import PropTypes from 'prop-types';

const PostGroup = ({ url, displayName, name, description, numEnvies, category, numComments }) => {

    var state = {
        card: "feed-card",
        name: "hideName"
    }
    function clickCard() {
        console.log("We just clicked on a card!");
        state.name = "displayName"
    }

    return (
        <div className="feed-card" onClick={clickCard}>
            <div className="displayImage" ><img src={url} alt="main" /></div>
            <div className={state.name}>{displayName}</div>
            <div className="name">{name}</div>
            <div className="description">{description}</div>
            <div className="envy-bar">
                <span className="envy-box">
                    <span className="envy-title">ENVY</span>
                    <span className="num-envies">{numEnvies}</span>
                </span>
                <span className="category">{category}</span>
            </div>
            <div className="share-bar">
                <div className="share-envy">Envy</div>
                <div className="share-comments">{numComments} Comments</div>
                <div className="share-action">Share</div>
            </div>
        </div>
    );
};

PostGroup.propTypes = {
    url: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    numEnvies: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    numComments: PropTypes.number.isRequired
};

PostGroup.defaultProps = {
    type: 'text'
};

export default PostGroup;
