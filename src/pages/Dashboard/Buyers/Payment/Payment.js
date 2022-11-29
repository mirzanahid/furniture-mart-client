import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from '../MyOrders/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const bookings = useLoaderData()
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>Payment to Purchase</h3>
            <p>Buyer Name: </p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookings={bookings[0]} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;