import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
        </div>
    );
};

export default ProductCard;