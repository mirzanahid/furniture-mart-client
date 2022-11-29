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
        <div className='py-5'>
            <h3 className='mt-3'>Payment to Purchase</h3>
            <p className='payment_texts'>Buyer Name: {bookings[0].name} </p>
            <p className='payment_texts'>Buyer email: {bookings[0].email} </p>
            <p className='payment_texts'>You have to pay: <span className='text-bold'>{bookings[0].price}</span> dollar</p>
            <div className='my-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookings={bookings[0]} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;