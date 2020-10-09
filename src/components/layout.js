import React from 'react'
import Navbar from './Navbar';

function layout(props) {
    const children = props.children

    return (
        <React.Fragment>
            <Navbar/>
            {children}
        </React.Fragment>
    ) 
}

export default layout
