import React from 'react';
import { FaCoffee, FaShoppingCart } from 'react-icons/fa'; // Using react-icons for icons

const Navbar = () => {
    return (
        <nav className="bg-brown-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo or Title */}
                <a href="/" className="text-xl font-bold text-yellow-500 flex items-center space-x-2">
                    <FaCoffee className="text-2xl" />
                    <span>CoffeeHub</span>
                </a>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="/categories" className="hover:text-yellow-400">Categories</a>
                    </li>
                    <li>
                        <a href="/marketplace" className="hover:text-yellow-400">Marketplace</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-yellow-400">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-yellow-400">Contact</a>
                    </li>
                </ul>

                {/* Cart Icon */}
                <a href="/cart" className="flex items-center space-x-2 hover:text-yellow-400">
                    <FaShoppingCart className="h-6 w-6" />
                    <span>Cart</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;