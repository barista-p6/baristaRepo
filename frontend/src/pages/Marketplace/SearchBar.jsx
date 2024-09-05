import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#B8916B] placeholder-gray-500"
        />
    );
};

export default SearchBar;