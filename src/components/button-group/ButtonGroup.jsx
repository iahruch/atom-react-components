import React from 'react';
import classNames from 'classnames';
import './ButtonGroup.css';
import Button from './../button/Button';


const ButtonGroup = ({children, onClick, className, active, vertical, ...attrs}) => {

const classes = classNames(
    'btn-group', 
    className,
    {vertical}
 );

    return(
        <div className={classes} >
            {children}
        </div>
    )
}

export default ButtonGroup;