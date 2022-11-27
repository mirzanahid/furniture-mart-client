import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useRole from '../hooks/useRole';

const BuyerRoute = ({ children }) => {
    const { user, load } = useContext(AuthContext);
    const [isBuyer, isRoleLoading] = useRole(user?.email)
    const location = useLocation();

    if (load || isRoleLoading) {
        return <Spinner className='loader' animation="border" variant="warning" />
    }

    if (user && isBuyer) {
        console.log('buyer')
        return children

    }
    console.log('buyer', isBuyer)
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;