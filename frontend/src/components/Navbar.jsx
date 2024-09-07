import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCoffee, FaShoppingCart } from 'react-icons/fa'; // Using react-icons for icons

const StickyNavbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-xl shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo or Title */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse text-[#E1BA94] hover:text-white">
          <FaCoffee className="text-2xl" />
          <span className="self-center text-2xl font-bold">CoffeeHub</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/cart" className="flex items-center space-x-2 text-[#E1BA94] hover:text-white">
            <FaShoppingCart className="h-6 w-6" />
            <span>Cart</span>
          </Link>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li className={`relative group ${location.pathname === "/" ? "active" : ""}`}>
              <Link to="/" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Home
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/categories" ? "active" : ""}`}>
              <Link to="/categories" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Categories
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/categories" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/marketplace" ? "active" : ""}`}>
              <Link to="/marketplace" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Marketplace
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/marketplace" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/about" ? "active" : ""}`}>
              <Link to="/about" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                About
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/about" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/contact" ? "active" : ""}`}>
              <Link to="/contact" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Contact
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>

            {/* New Routes */}
            <li className={`relative group ${location.pathname.startsWith("/admin") ? "active" : ""}`}>
              <Link to="/admin/*" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Admin
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname.startsWith("/admin") ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/profile" ? "active" : ""}`}>
              <Link to="/profile" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Profile
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/profile" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/chefprofile" ? "active" : ""}`}>
              <Link to="/chefprofile" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Chef Profile
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/chefprofile" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/login" ? "active" : ""}`}>
              <Link to="/login" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Login
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/login" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/registeruser" ? "active" : ""}`}>
              <Link to="/registeruser" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Register User
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/registeruser" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li className={`relative group ${location.pathname === "/BaristaADashboard" ? "active" : ""}`}>
              <Link to="/BaristaADashboard" className="block py-2 px-3 md:p-0 text-[#E1BA94] hover:text-white">
                Barista Dashboard
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                  location.pathname === "/BaristaADashboard" ? "w-full" : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
