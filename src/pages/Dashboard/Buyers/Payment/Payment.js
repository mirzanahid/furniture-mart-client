import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../MyOrders/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const bookings = useLoaderData()
    
    return (
        <div>
            <h3>sad</h3>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm  bookings={bookings}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;