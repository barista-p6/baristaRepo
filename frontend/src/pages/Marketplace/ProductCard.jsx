import React from 'react';

// Define a list of URLs to exclude
const excludedImageUrls = [
    'https://www.1883.com/app/uploads/2024/08/honey-lemonade.jpg',
    // Add more URLs or patterns to exclude as needed
];

const ProductCard = ({ product }) => {
    // Check if the product image URL exists and is not in the exclusion list
    const hasValidImage = product.image &&
        typeof product.image === 'string' &&
        product.image.trim() !== '' &&
        !excludedImageUrls.includes(product.image);

    // Render nothing if there is no valid image
    if (!hasValidImage) {
        return null;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-bold mb-2 text-black">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
        </div>
    );
};

export default ProductCard;
