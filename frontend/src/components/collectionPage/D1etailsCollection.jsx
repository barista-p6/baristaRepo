import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RecipesProvider } from "../useContext/RecipesContext";
import { BeveragesProvider } from "../useContext/BeveragesContext";
import axios from "axios";
import RecipesDetails from "./D3RecipesDetails";
import BeverageDetails from "./D2BaverageDetails";

function DetailsCollection() {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/product/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the product details!", error);
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      {product.imageURL ? (
        <img src={product.imageURL} alt={product.name} className="product-image" />
      ) : (
        <p>No image available</p>
      )}
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>

      {/* Wrap the components that need recipe and beverage data with the appropriate providers */}
      <RecipesProvider productId={id}>
        <RecipesDetails />
      </RecipesProvider>

      <BeveragesProvider productId={id}>
        <BeverageDetails />
      </BeveragesProvider>

     
    </div>
  );
}

export default DetailsCollection;