import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useBuyer from '../hooks/useBuyer';


const BuyerRoute = ({ children }) => {
    const { user, load } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    if (load || isBuyerLoading) {
        return <div className="loader_div">
            <Spinner className='loader' animation="border" variant="warning" />
        </div>
    }

    if (user && isBuyer) {
        return children

    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;