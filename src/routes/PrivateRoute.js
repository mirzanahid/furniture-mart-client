import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, load } = useContext(AuthContext);
    const location = useLocation();

    if (load) {
        return <div className="loader_div">
            <Spinner className='loader' animation="border" variant="warning" />
        </div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;