import React, { useContext } from "react";
import { RecipesContext } from "../useContext/RecipesContext";
import { Link } from "react-router-dom";

const RecipesDetails = () => {
  const { recipes, loading, error } = useContext(RecipesContext);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2>Recipes</h2>
      {recipes && recipes.length > 0 ? (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id}>
              <h3>{recipe.name}</h3>
              <p>Instructions: {recipe.instructions}</p>
              <p>Categories: {recipe.categories.join(", ")}</p>
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(", ")}</p>
              <Link  to={`/recipes/${recipe._id}`}   className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all" >
                View More Details
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
};

export default RecipesDetails;