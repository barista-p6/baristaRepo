import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const {
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Your Shopping Cart</h2>
            {totalItems === 0 ? (
                <p>Your cart is empty. <Link to="/products" className="text-blue-500">Start shopping</Link>.</p>
            ) : (
                <div className="space-y-4">
                    <ul className="space-y-2">
                        {items.map((item) => (
                            <li key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                    <h4 className="ml-4 text-lg font-medium">{item.name}</h4>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold">${item.price}</p>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">
                                            +
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">
                                            -
                                        </button>
                                        <button onClick={() => removeItem(item.id)} className="px-2 py-1 text-red-500">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="text-right">
                        <p className="text-lg">Total Items: <span className="font-bold">{totalItems}</span></p>
                        <p className="text-lg">Total Price: <span className="font-bold">${cartTotal}</span></p>
                        <button onClick={emptyCart} className="px-4 py-2 bg-red-500 text-white rounded mt-4">
                            Empty Cart
                        </button>
                        <Link to="/checkout">
                            <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded mt-4">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;