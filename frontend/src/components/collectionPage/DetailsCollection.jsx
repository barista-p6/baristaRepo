// ProductDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './detailscollection.css'

function DetailsCollection() {
  const { id } = useParams();
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
      {/* Ensure you have a default image URL or handle missing images */}
      {product.imageURL ? (
        <img src={product.imageURL} alt={product.name} className="product-image" />
      ) : (
        <p>No image available</p>
      )}
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      
      <h2>Recipes</h2>
      {product.recipes && product.recipes.length > 0 ? (
        <ul>
          {product.recipes.map(recipe => (
            <li key={recipe._id}>
              <h3>{recipe.name}</h3>
              <p>Instructions: {recipe.instructions}</p>
              <p>Categories: {recipe.categories.join(", ")}</p>
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(", ")}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes available</p>
      )}

      <h2>Beverages</h2>
      {product.beverages && product.beverages.length > 0 ? (
        <ul>
          {product.beverages.map(beverage => (
            <li key={beverage._id}>
              <h3>{beverage.name}</h3>
              <p>{beverage.description}</p>
              <p>Price: ${beverage.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No beverages available</p>
      )}
    </div>
  );
}

export default DetailsCollection;
