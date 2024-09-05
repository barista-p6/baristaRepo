import React from 'react';
import { FaCoffee, FaShoppingCart } from 'react-icons/fa'; // Using react-icons for icons

const Navbar = () => {
    return (
        <nav className="bg-black text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo or Title */}
                <a href="/" className="text-xl font-bold text-[#E1BA94] hover:text-white flex items-center space-x-2">
                    <FaCoffee className="text-2xl" />
                    <span>CoffeeHub</span>
                </a>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="/categories" className="text-[#E1BA94] hover:text-white">Categories</a>
                    </li>
                    <li>
                        <a href="/marketplace" className="text-[#E1BA94] hover:text-white">Marketplace</a>
                    </li>
                    <li>
                        <a href="/about" className="text-[#E1BA94] hover:text-white">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-[#E1BA94] hover:text-white">Contact</a>
                    </li>
                </ul>

                {/* Cart Icon */}
                <a href="/cart" className="flex items-center space-x-2 text-[#E1BA94] hover:text-white">
                    <FaShoppingCart className="h-6 w-6" />
                    <span>Cart</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;