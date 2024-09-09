import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaCoffee, FaShoppingCart, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

const StickyNavbar = ({ username }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [userType, setuserType] = useState("user");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  const getNavLinks = () => {
    const commonLinks = [
      { path: "/", label: "Home" },
      { path: "/market", label: "Marketplace" },
      { path: "/collection", label: "Collection" },
      { path: "/about", label: "About Us" },
      { path: "/contact", label: "Contact Us" },
    ];

    const userTypeLinks = {
      barista: [
        { path: "/chefprofile", label: "Chef Profile" },
        { path: "/BaristaADashboard", label: "Dashboard" },
      ],
    };

    return [...commonLinks, ...(userTypeLinks[userType] || [])];
  };

  const renderUserIcon = () => {
    switch (userType) {
      case 'user':
        return <FaUser className="text-xl" />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${isScrolled || !isHomePage ? "bg-black/40 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse text-white hover:text-white">
          <FaCoffee className="text-2xl" />
          <span className="self-center text-2xl font-bold">BARISTA HUB</span>
        </Link>

        {/* User Actions */}
        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse relative">
          {userType && (
            <div className="flex items-center space-x-2">
              <Link to="/BaristaUserProfile" className="text-white hover:text-gray-300 flex items-center">
                {renderUserIcon()}
                <span className="ml-2">{username}</span>
              </Link>
              {userType === 'user' && (
                <Link to="/cart" className="text-white hover:text-gray-300">
                  <FaShoppingCart className="text-xl" />
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-white text-base hover:text-gray-300 font-medium flex items-center pl-2"
              >
                Logout
                <FaSignOutAlt className="ml-2" />
              </button>
            </div>
          )}
          {!userType && (
            <>
              <Link to="/login" className="text-white hover:text-gray-300 font-medium">
                Barista Login
              </Link>
              <p>|</p>
              <Link to="/loginuser" className="text-white hover:text-gray-300 font-medium ml-4">
                Customer Login
              </Link>
            </>
          )}

          {/* Dashboard Link */}
          {userType && (
            <Link
              to= "/admin"
              className="text-nowrap absolute top-4 left-60 text-xs text-gray-200 hover:text-gray-400 mr-2 mt-2"
            >
              Admin Dashboard
            </Link>
          )}
        </div>

        {/* Navbar Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {getNavLinks().map((link, index) => (
              <li
                key={index}
                className={`relative group ${location.pathname === link.path ? "active" : ""}`}
              >
                <Link
                  to={link.path}
                  className={`block py-2 px-3 md:p-0 ${isHomePage ? "text-white" : "text-white"
                    } hover:text-gray-300`}
                >
                  {link.label}
                </Link>
                <span
                  className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-white transition-all duration-500 ${location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full group-hover:left-0"
                    }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
