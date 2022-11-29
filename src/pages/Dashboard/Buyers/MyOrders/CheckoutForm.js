import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ bookings }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState();
    const { price, name, email, product_id, _id } = bookings;

    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                price,
                user_name: name,
                email: email,
                transactionId: transactionId,
                payment: "paid",
                product_id: product_id

            }


            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    'content-type': "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const updateBooking = {
                            payment_status: "1"
                        }
                        fetch(`http://localhost:5000/bookings/${_id}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(updateBooking)
                        })
                            .then(res => res.json())
                            .then(data => {
                                const updateCategories={
                                    status: "sold"
                                }
                                fetch(`http://localhost:5000/productCategories/${product_id}`, {
                                    method: 'PUT',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(updateCategories)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        setSuccess("Congrats! your payment completed");
                                        setTransactionId(paymentIntent.id)
                                        toast.success('your payment successful.')

                                    })

                            })
                    }
                })


        }
        setProcessing(false)


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='row_btn' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='error-text'>{cardError}</p>
            {
                success && <div>
                    <p className='success_toggle'>{success}</p>
                    <p className='success_toggle text-black'>Your transactionId <span className='text-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;