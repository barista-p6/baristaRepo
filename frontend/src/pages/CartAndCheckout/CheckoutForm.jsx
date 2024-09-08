import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Swal from 'sweetalert2';

const CheckoutForm = ({ cartTotal, nextStep }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [paymentRequest, setPaymentRequest] = useState(null);
    const [loading, setLoading] = useState(false);

    // Create a payment request for Apple Pay
    React.useEffect(() => {
        if (stripe) {
            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Total',
                    amount: Math.round(cartTotal * 100),
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });

            pr.canMakePayment().then(result => {
                if (result) {
                    setPaymentRequest(pr);
                }
            });
        }
    }, [stripe, cartTotal]);

    const handleCardPayment = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            Swal.fire({
                icon: 'error',
                title: 'Stripe not loaded',
                text: 'Stripe has not loaded correctly.',
            });
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Error',
                    text: error.message,
                });
                setLoading(false);
                return;
            }
            const response = await axios.post('http://localhost:3000/api/payment', {
                amount: Math.round(cartTotal * 100),
                payment_method: paymentMethod.id,
            });

            if (response.data.success) {



                // console.log("payment success")
                // const response = await axios.post('http://localhost:3000/api/orders', 
                //     {

                //     }
                // ); 



                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful',
                    text: 'Your payment was successful!',
                    confirmButtonText: 'Go to Confirmation',
                }).then(result => {
                    if (result.isConfirmed) {
                        nextStep();
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Failed',
                    text: 'Payment failed. Please try again.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Payment Error',
                text: 'Payment failed. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    // Handle Apple Pay
    React.useEffect(() => {
        if (paymentRequest) {
            paymentRequest.on('paymentmethod', async (event) => {
                try {
                    const { paymentIntent, error } = await stripe.confirmCardPayment(
                        event.paymentMethod.id,
                        { payment_method: event.paymentMethod.id }
                    );

                    if (error) {
                        event.complete('fail');
                        Swal.fire({
                            icon: 'error',
                            title: 'Apple Pay Failed',
                            text: error.message,
                        });
                    } else {
                        event.complete('success');
                        Swal.fire({
                            icon: 'success',
                            title: 'Apple Pay Successful',
                            text: 'Your payment was successful!',
                        });
                        nextStep();
                    }
                } catch (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Apple Pay Error',
                        text: err.message,
                    });
                }
            });
        }
    }, [paymentRequest, stripe, nextStep]);

    return (
        <form onSubmit={handleCardPayment} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="flex justify-between ">
                <label className={`flex items-center  border p-2 rounded-md cursor-pointer ${paymentMethod === 'creditCard' ? 'border-blue-500 shadow-lg' : 'border-gray-300'}`}>
                    <input
                        className="appearance-none"
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={() => setPaymentMethod('creditCard')}
                    />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-6" />
                </label>

                <label className={`flex  items  border p-2 rounded-md cursor-pointer ${paymentMethod === 'apple' ? 'border-blue-500 shadow-lg' : 'border-gray-300'}`}>
                    <input
                        className="appearance-none "
                        type="radio"
                        value="apple"
                        checked={paymentMethod === 'apple'}
                        onChange={() => setPaymentMethod('apple')}
                    />
                    <img src="https://wallpapers.com/images/hd/white-apple-pay-logo-msnykrqjc4mr4ldx-2.jpg" alt="Apple Pay" className="h-10" />
                </label>
            </div>

            {/* PaymentRequestButtonElement for Apple Pay */}
            {paymentMethod === 'apple' && paymentRequest && (
                <PaymentRequestButtonElement options={{ paymentRequest }} />
            )}

            {/* Card Information */}
            {paymentMethod === 'creditCard' && (
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700">Cardholder's Name</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" placeholder="John Doe" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700">Card Number</label>
                        <div className="border border-gray-300 rounded-md p-2">
                            <CardNumberElement
                                className="p-2"
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-gray-700">Valid Thru</label>
                            <div className="border border-gray-300 rounded-md p-2">
                                <CardExpiryElement
                                    className="p-2"
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-700">CVC</label>
                            <div className="border border-gray-300 rounded-md p-2">
                                <CardCvcElement
                                    className="p-2"
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Submit Button */}
            {paymentMethod === 'creditCard' && (
                <button type="submit" disabled={!stripe || loading} className="w-full bg-green-600 text-white rounded-md py-2 px-4 hover:bg-gre">
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            )}
        </form>
    );
};

export default CheckoutForm;