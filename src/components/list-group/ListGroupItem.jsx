import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';


const ListGroupItem = ({
    children, className, tag: Tag, active, disabled,  ...attrs
}) => {
    
    if( attrs.href ) { Tag = 'a'}

    const classes = classNames(
        'list-group',
        className,
        { active },
        { disabled }
    )

    return(
        <Tag classNames={classes}>
            {children}
        </Tag>
    )
}
ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    active: PropTypes.bool,
    disabled: PropTypes.bool,
}
ListGroupItem.defaultProps = {
    children: '',
    className: '',
    tag: 'li',
    active: false,
    disabled: false,
}

export default ListGroupItem;