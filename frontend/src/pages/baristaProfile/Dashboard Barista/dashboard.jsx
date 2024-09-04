import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Coffee, Users, TrendingUp, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BaristaADashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const recipesResponse = await axios.get('http://localhost:3000/api/barista/recipes');
      const customersResponse = await axios.get('http://localhost:3000/api/barista/customers');
      const salesResponse = await axios.get('http://localhost:3000/api/barista/sales');

      setRecipes(recipesResponse.data);
      setCustomers(customersResponse.data);
      setSalesData(salesResponse.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/barista/recipes', newRecipe);
      setRecipes([...recipes, response.data]);
      setNewRecipe({ name: '', description: '' });
    } catch (error) {
      console.error('Error adding new recipe:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Barista Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Coffee className="mr-2" /> Recipes
          </h2>
          <ul className="list-disc list-inside">
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.name}</li>
            ))}
          </ul>
          <form onSubmit={handleAddRecipe} className="mt-4">
            <input
              type="text"
              placeholder="Recipe name"
              value={newRecipe.name}
              onChange={(e) => setNewRecipe({...newRecipe, name: e.target.value})}
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              placeholder="Recipe description"
              value={newRecipe.description}
              onChange={(e) => setNewRecipe({...newRecipe, description: e.target.value})}
              className="w-full p-2 mb-2 border rounded"
            ></textarea>
            <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300 flex items-center">
              <Plus size={18} className="mr-2" /> Add Recipe
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" /> Recent Customers
          </h2>
          <ul>
            {customers.slice(0, 5).map((customer, index) => (
              <li key={index} className="mb-2">{customer.name} - {customer.lastPurchase}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2" /> Sales Analytics
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BaristaADashboard;