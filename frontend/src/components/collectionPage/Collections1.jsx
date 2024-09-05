import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="">
          <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(https://www.1883.com/app/uploads/2024/03/header-recette-mixo-framboise-1.jpg)` }}
    >
      {/* Optional: Add overlay for better text readability */}
      <div className="absolute inset-0"></div> 

      {/* Centered Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full ml-5 px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Discover our collection of creation materials.
          </h1>
        </div>
      </div>
    </div>



    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Syrups</h1>
      <p className="mb-2">For cocktails and hot drinks.</p>
      <p className="mb-2">120 flavours to make your creations amazing.</p>
      <p className="mb-4">Classic, less sugar and sugar-free and organic varieties available.</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">FILTERS</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Classic syrups (104)</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Mixer syrups (4)</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">New (8)</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Organic syrups (10)</button>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Sugar free syrups (5)</button>
          <select className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            <option>All Colours</option>
          </select>
          <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Reset</button>
        </div>
      </div>

      {products.length === 0 ? (
      <p className="text-center font-cormorant text-xl">No products available</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map(product => (
          <div key={product._id} className="shadow-md overflow-hidden font-cormorant">
            <div className="relative group">
              <Link to={`/product/${product._id}`}>
                <img src={product.imageURL} alt={product.name} className="mx-auto h-48 object-cover p-3 transition duration-300 ease-in-out transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 w-40 h-40 mx-auto my-auto">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <p className="text-lg font-semibold tracking-wider font">DISCOVER NOW</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span className="inline-block bg-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-4">
              <h2 className="text-sm font-semibold mb-2 font-playfair">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    )}

    </div>
    </div>
  );
}

export default Collection;