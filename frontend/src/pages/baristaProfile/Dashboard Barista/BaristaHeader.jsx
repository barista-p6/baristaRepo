import React from 'react';

const BaristaHeader = ({ name, avatar }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
    <img src={avatar || "/api/placeholder/100/100"} alt="Barista Avatar" className="w-16 h-16 rounded-full" />
    <div>
      <h1 className="text-2xl font-bold">{name || "Barista Name"}</h1>
      <p className="text-gray-600">Professional Barista</p>
    </div>
  </div>
);

export default BaristaHeader;
