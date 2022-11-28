import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const bookings = useLoaderData()
    console.log(bookings)
    return (
        <div>
            <h3></h3>
        </div>
    );
};

export default Payment;