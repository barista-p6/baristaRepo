import React from "react";
// for details 
const V2iewMoreRecipeDetailReview = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <div>
      <h2>Recipe Details</h2>
      <h3>{recipe.name}</h3>
      <p>Instructions: {recipe.instructions}</p>
      <p>Categories: {recipe.categories.join(", ")}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(", ")}</p>
    </div>
  );
};

export default V2iewMoreRecipeDetailReview;
