import React, { useContext, useState, useMemo } from "react";
import { BeveragesContext } from "../useContext/BeveragesContext";
import { useCart } from 'react-use-cart';
import Toast from '../../pages/Marketplace/Toast';

const BeverageDetails = () => {
  const { beverages, loading, error } = useContext(BeveragesContext);
  const { addItem } = useCart();
  const [toast, setToast] = useState(null);

  const handleAddToCart = (product) => {
    if (product._id) {
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        photos: product.photos,
        category: product.category,
        baristaID: product.baristaId
      });
      setToast({
        message: `${product.name} has been added to your cart!`,
        type: 'success',
      });
      setTimeout(() => setToast(null), 3000);
    } else {
      console.error("Product ID is missing.");
    }
  };

  const getBeverageImage = (photos) => {
    return photos
      ? photos
      : 'https://via.placeholder.com/300x300?text=Beverage+Image';
  };

  const beverageItems = useMemo(() => {
    return beverages && beverages.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {beverages.map((beverage) => (
          <div
            key={beverage._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-64 bg-gray-100 rounded-t-lg">
              <img
                src={getBeverageImage(beverage.photos)}
                alt={beverage.name || "Beverage image"}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg transition-opacity duration-200"
                onError={(e) => {
                  e.target.src = getBeverageImage();
                }}
              />
            </div>
            <div className="p-6 flex flex-col gap-3 justify-center">
              <h3 className="text-xl font-semibold text-gray-800">{beverage.name}</h3>
              <p className="text-gray-600 text-sm">{beverage.description}</p>
              <p className="text-lg font-semibold text-black">Price: {beverage.price} JOD</p>
              <button
                className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-300 shadow-md"
                onClick={() => handleAddToCart(beverage)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No beverages available</p>
    );
  }, [beverages]);

  if (loading) return <p className="text-center text-gray-500">Loading beverages...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-8 min-h-screen mt-20">
      <h2 className="text-3xl font-light text-center mb-12 text-gray-900">Chefs Refreshing Beverages</h2>

      {beverageItems}

      {toast && (
        <Toast message={toast.message} type={toast.type} />
      )}
    </div>
  );
};

export default BeverageDetails;