import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useRole from '../hooks/useRole';



const RoleRoute = ({ children }) => {
    const { user, load } = useContext(AuthContext);
    const [isAdmin, isBuyer, isSeller, isRoleLoading] = useRole(user?.email)
    const location = useLocation();

    if (load || isRoleLoading) {
        return <Spinner className='loader' animation="border" variant="warning" />
    }
    if (user && isAdmin) {
        console.log('admin')
        return children

    }
    if (user && isBuyer) {
        console.log('buyer')
        return children

    }
    if (user && isSeller) {
        console.log('seller')
        return children

    }

    console.log(isAdmin, isBuyer, isSeller)
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default RoleRoute;