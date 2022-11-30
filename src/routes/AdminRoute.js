import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';



const AdminRoute = ({ children }) => {
    const { user, load } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if (load || isAdminLoading) {
        return <div className="loader_div">
        <Spinner className='loader' animation="border" variant="warning" />
    </div>
    }
    if (user && isAdmin) {
        return children

    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;