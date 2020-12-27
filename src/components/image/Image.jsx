import { checkPropTypes } from 'prop-types'
import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css'

const Image = ({
    src, 
    className,
    alt,
    width,
    height,
    circle
}) => {
    if(!src) {
        src=`https://via.placeholder.com/${width}x${height}`
    }
    const classes = classNames(
        className,
        { circle }
    )

    return <img 
        src={src} 
        alt={alt}   
        className={classes}
        width={width}
        height={height}
    />
}
Image.protoTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

Image.defaultProps = {
    src: '',
    alt: 'image name',
    className: '',
    width: 100,
    height: 100
}

export default Image;