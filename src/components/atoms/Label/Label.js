import React from 'react';
// import Center from '../../Center/Center';
import './Label.css';

export default function Label(props) {
    const {size = 'medium', children, ...rest} = props
    return (
        <label className={`${size}`} {...rest}>{children}</label>
    )
}