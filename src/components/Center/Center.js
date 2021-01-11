import React from 'react';
import './Center.css';

function Center(props) {

    console.log(props.children)

    return (
        <div className='center'>
            {props.children}
        </div>
    );
}

export default Center;