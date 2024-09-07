import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const OrderConfirmation = ({ deliveryInfo }) => {
    const { items, cartTotal } = useCart();

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Order Confirmation</h2>
            <div className="border-b pb-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">Order Details</h3>
                {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="flex justify-between items-center font-bold mt-4">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Delivery Information</h3>
                <p>{deliveryInfo.fullName}</p>
                <p>{deliveryInfo.address}</p>
                <p>{deliveryInfo.city}, {deliveryInfo.country} {deliveryInfo.postalCode}</p>
                <p>Phone: {deliveryInfo.phone}</p>
            </div>
            <div className="text-center">
                <p className="text-green-600 font-semibold mb-4">Your order has been placed successfully!</p>
                <p>You will receive an email confirmation shortly.</p>
            </div>
            <Link to = "/">
            <button className='bg-black text-white'> 
                back to home page
                </button>
            </Link>
        </div>
        
    );
};

export default OrderConfirmation;