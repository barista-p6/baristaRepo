import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipesProvider } from "../useContext/RecipesContext";
import { BeveragesProvider } from "../useContext/BeveragesContext";
import axios from "axios";
import RecipesDetails from "./D3RecipesDetails";
import BeverageDetails from "./D2BaverageDetails";

function DetailsCollection() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the product details!", error);
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">{product.name}</h1>
        
        {/* Display product photos */}
        {product.photos && product.photos.length > 0 ? (
          product.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No images available</p>
        )}

        {/* Display background image if available */}
        {product.bg && (
          <img
            src={product.bg}
            alt={`${product.name} background`}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}

        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Category:</span> {product.category}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Price:</span> ${product.price}
        </p>

        {/* Recipes section */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2">Recipes</h2>
          <RecipesProvider productId={id}>
            <RecipesDetails />
          </RecipesProvider>
        </div>

        {/* Beverages section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Beverages</h2>
          <BeveragesProvider productId={id}>
            <BeverageDetails />
          </BeveragesProvider>
        </div>
      </div>
    </div>
  );
}

export default DetailsCollection;
