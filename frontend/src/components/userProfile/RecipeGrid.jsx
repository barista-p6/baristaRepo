import React from 'react';
import { Star } from 'lucide-react';

const RecipeGrid = ({ recipes, icon }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {recipes.length > 0 ? (
      recipes.map((recipe) => (
        <div key={recipe._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
          <img
            src={recipe.bg?.[0] || 'default-recipe-pic-url'}
            alt={recipe.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold flex items-center mb-2">
              {icon && <span className="mr-2">{icon}</span>}
              {recipe.name}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 flex items-center">
                <Star size={16} className="mr-1" />
                {recipe.rating || '4.5'}
              </span>
              <button className="text-sm bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600 transition">
                Remove
              </button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-400 col-span-3 text-center">No recipes found.</p>
    )}
  </div>
);

export default RecipeGrid;
