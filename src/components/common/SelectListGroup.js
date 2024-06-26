/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:49:41
 * @modify date 2019-09-03 10:49:41
 * @desc [description]
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({ name, placeholder, value, error, info, onChange, options }) => {
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ));

    return (
        <div className="form-group">
            <select
                className={classnames('form-control form-control-lg', {
                    'is-invald': error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            >
                {selectOptions}
            </select>
            {info && <small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

export default SelectListGroup;
