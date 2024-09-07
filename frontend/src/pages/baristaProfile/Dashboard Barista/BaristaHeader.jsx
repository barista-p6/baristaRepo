import React from 'react';

const BaristaHeader = ({ name, avatar }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">

  <div className="bg-gradient-to-r from-amber-500 to-amber-700 p-8 text-white relative">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden">
          <img
            src={avatar}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">{name || "Barista Name"}</h1>
          <p className="text-xl mt-2">Professional Barista</p>
        </div>
      </div>
    </div>
  </div>
  </div>

);

export default BaristaHeader;
