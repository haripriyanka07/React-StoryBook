import React from 'react'

export default function Heading(props) {
    const { children, ...rest} = props;
    return (
        <h1 style={rest}>{children}</h1>
    )
}