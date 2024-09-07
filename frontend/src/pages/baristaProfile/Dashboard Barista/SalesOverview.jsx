import React from 'react';
import { FaCoffee, FaUser, FaUtensils, FaDollarSign } from 'react-icons/fa'; // Importing icons

const SalesOverview = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-2">
        <FaCoffee className="text-3xl" /> {/* Using React Icons */}
        <div>
          <p className="text-sm font-medium">Total Beverages Sold</p>
          <p className="text-3xl font-bold">34</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <FaUser className="text-3xl" /> {/* Using React Icons */}
        <div>
          <p className="text-sm font-medium">Number of Customers</p>
          <p className="text-3xl font-bold">56</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <FaUtensils className="text-3xl" /> {/* Using React Icons */}
        <div>
          <p className="text-sm font-medium">Shared Recipes</p>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <FaDollarSign className="text-3xl" /> {/* Using React Icons */}
        <div>
          <p className="text-sm font-medium">Total Sales</p>
          <p className="text-2xl font-bold">$165</p>
        </div>
      </div>
    </div>
  </div>
);

export default SalesOverview;
