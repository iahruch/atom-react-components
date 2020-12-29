import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';


const ListGroup = ({
    children, className, tag:Tag,  ...attrs
}) => {
    
    const classes = classNames(
        'list-group',
        className
    )

    return(
        <Tag classNames={classes}>
            {children}
        </Tag>
    )
}
ListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ])
}
ListGroup.defaultProps = {
    children: '',
    className: '',
    tag: 'ul'
}

export default ListGroup;