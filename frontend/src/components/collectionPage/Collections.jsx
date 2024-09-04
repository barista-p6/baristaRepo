import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './collection.css'

function Collection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the backend
    axios.get("http://localhost:3000/api/Allproducts")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="collection">
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div key={product._id} className="product-card">
              <img src={product.imageURL} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <Link to={`/product/${product._id}`} className="view-details">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
