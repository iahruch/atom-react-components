import React from 'react';
import classNames from 'classnames'; 
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = ({name, className, size, onClick, disabled, ...attrs}) => {
    
    const classes = classNames(
        'fa',
        `fa-${name}`,
        className,
        { func: onClick },
        { disabled }
    );

    const styles = size? {fontSize: `${size}rem`} : null

    return(
        <i
            className={classes}
            onClick={ disabled? null :  onClick }
            style={styles} 
            { ...attrs }           
        ></i>
    )
}

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

Icon.defaultProps = {
    name: '',
    className: '',
    size: 1,
    onClick: null,
    disabled: false
}

export default Icon;