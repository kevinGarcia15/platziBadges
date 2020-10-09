import React from 'react'
import NotFoundPage from '../images/404.svg'

function NotFound() {
    return (
        <React.Fragment>
            <div className="container w-100">
                <div className='d-flex align-items-center mt-5'>
                <img className='img-fluid' src={NotFoundPage} alt="404"/>
                </div>
                   
            </div>
        </React.Fragment>
    )
}

export default NotFound
