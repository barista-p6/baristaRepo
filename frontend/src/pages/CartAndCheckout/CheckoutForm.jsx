import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cartTotal, deliveryInfo, nextStep, prevStep, }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate(); // Hook for navigation
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
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
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful',
                    text: 'Your payment was successful!',
                    confirmButtonText: 'Go to Confirmation',
                }).then((result) => {
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

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="flex justify-between">
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={() => setPaymentMethod('creditCard')}
                    />
                    <span className="text-gray-700">Pay with Credit Card</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-6" />
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                    />
                    <span className="text-gray-700">Pay with PayPal</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                </label>
            </div>

            {/* Card Information */}
            {paymentMethod === 'creditCard' && (
                <div className="space-y-4">
                    {/* Cardholder's Name */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Cardholder's Name</label>
                        <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none "
 placeholder="John Doe" required />
                    </div>

                    {/* Card Number */}
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

                    {/* Expiry and CVC */}
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

            {/* Buttons */}
            <div className="flex justify-between mt-6">
                <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={prevStep}>Back
                   
                </button>
                <button
                    type="submit"
                    className={`px-4 py-2 text-white rounded-md ${loading ? 'bg-gray-500' : 'bg-green-700'} hover:bg-green-800 transition duration-300`}
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Pay'}
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;