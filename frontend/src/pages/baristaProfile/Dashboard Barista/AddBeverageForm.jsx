import React, { useState } from 'react';
import ProductPopup from './ProductPopup';
const AddBeverageForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [selectedSyrups, setSelectedSyrups] = useState([]);
    const [showSyrupPopup, setShowSyrupPopup] = useState(false);
  
    const syrups = [
      { id: 1, name: 'Vanilla Syrup' },
      { id: 2, name: 'Caramel Syrup' },
      { id: 3, name: 'Hazelnut Syrup' },
      { id: 4, name: 'Chocolate Syrup' },
    ];
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };
  
    const handleSyrupSelect = (syrup) => {
      setSelectedSyrups([...selectedSyrups, syrup]);
      setShowSyrupPopup(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ name, price, description, category, image, selectedSyrups });
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Beverage</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Beverage Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
                placeholder="Enter beverage name" 
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input 
                type="number" 
                id="price" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
                placeholder="Enter price" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea 
              id="description" 
              rows="3" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              placeholder="Enter beverage description"
            ></textarea>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select 
              id="category" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="">Select a category</option>
              <option value="coffee">Coffee</option>
              <option value="tea">Tea</option>
              <option value="smoothie">Smoothie</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
            <input 
              type="file" 
              id="image" 
              onChange={handleImageUpload}
              className="mt-1 block w-full" 
            />
            {image && <img src={image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Syrups</label>
            <div className="mt-1 flex flex-wrap gap-2">
              {selectedSyrups.map(syrup => (
                <span key={syrup.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{syrup.name}</span>
              ))}
            </div>
            <button 
              type="button" 
              onClick={() => setShowSyrupPopup(true)}
              className="mt-2 bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
            >
              Add Syrup
            </button>
          </div>
          {showSyrupPopup && (
            <ProductPopup 
              syrups={syrups} 
              onSelect={handleSyrupSelect}
              onClose={() => setShowSyrupPopup(false)} 
            />
          )}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Add Beverage</button>
        </form>
      </div>
    );
  };
  
  export default AddBeverageForm;