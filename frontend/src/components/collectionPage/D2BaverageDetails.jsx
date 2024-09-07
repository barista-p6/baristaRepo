import React, { useContext } from "react";
import { BeveragesContext } from "../useContext/BeveragesContext";
import { Link } from "react-router-dom";

const BeverageDetails = () => {
  const { beverages, loading, error } = useContext(BeveragesContext);

  if (loading) return <p>Loading beverages...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Refreshing Beverages</h2>

      {beverages && beverages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {beverages.map((beverage) => (
            <div
              key={beverage._id}
              className="beverage-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={beverage.image} // Assuming an image property exists
                alt={beverage.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{beverage.name}</h3>
                <p className="text-gray-700 mb-4">{beverage.description}</p>
                <p className="text-lg font-bold text-blue-500">Price: ${beverage.price}</p>

                {/* زر Discover for More Drinks داخل البطاقة */}
                <Link
                  to="/market" // توجيه المستخدم إلى مسار السوق
                  className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-700 mt-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25V9m12.75 0H6.75a2.25 2.25 0 01-2.25-2.25V3.75m0 0L12 12m0 0l-6.75 8.25M12 12l6.75 8.25"
                    />
                  </svg>
                  Discover for More Drinks
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No beverages available</p>
      )}
    </div>
  );
};

export default BeverageDetails;
