import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
import error from '../../../assets/404.svg'

const Error = () => {
    return (
        <div className='error-page'>
            <div className="overlay">
                <div className="error-inner text-center">
                    <div className="error_image">
                        <img src={error} alt="" />
                    </div>
                    <h4 className='error-title'>Page Not Found</h4>
                    <p className='error-paragraph'>The page you are looking for does not exist. Please go to home. </p>
                    <Link to={'/'} className='regular-btn'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;