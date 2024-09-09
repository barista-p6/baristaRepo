import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { motion } from 'framer-motion';
import OrderSummary from './OrderSummary';
import { Link } from 'react-router-dom';

const CartContent = ({ nextStep }) => {
    const { items, updateItemQuantity, removeItem } = useCart();
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [discountApplied, setDiscountApplied] = useState(false);

    const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const applyDiscount = () => {
        if (promoCode.toLowerCase() === 'discount10') {
            setDiscount(cartTotal * 0.1);
            setDiscountApplied(true);
        } else {
            alert('Invalid promo code');
            setDiscount(0);
            setDiscountApplied(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
                {items.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center flex-grow p-8 bg-gray-100 rounded-lg shadow-md"
                    >
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
                            <p className="text-gray-500">It looks like you haven't added anything to your cart yet.</p>
                            <Link to="/market"
                                className="mt-4 inline-block px-4 py-2 w-full bg-black  text-white  rounded-md hover:bg-gray-600 transition">
                                Browse Products
                            </Link>
                        </div>
                    </motion.div>
                ) : (
                    items.map((item) => (
                        <div key={item._id} className="flex items-center gap-4 mb-4 pb-4 border-b">
                            <img src={item.photos} alt={item.name} className="w-24 h-24 object-contain" />
                            <div className="flex-grow">
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="text-sm text-gray-600">Description: {item.description}</p>
                                <div className="mt-2">
                                    <button onClick={() => removeItem(item.id)} className="text-sm underline mr-2 text-red-600">Delete</button>
                                    <button className="text-sm underline">Move to Wishlist</button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <select
                                    value={item.quantity}
                                    onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
                                    className="mr-4 p-1 border rounded"
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                <span className="font-bold">${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <OrderSummary
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                discount={discount}
                discountApplied={discountApplied}
                applyDiscount={applyDiscount}
                nextStep={nextStep}
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex justify-center"
            >
                {/* You can add additional content here if needed */}
            </motion.div>
        </div>
    );
};

export default CartContent;
