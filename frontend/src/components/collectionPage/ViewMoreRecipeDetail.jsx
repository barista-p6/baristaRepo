import React, { useContext, useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { RecipesContext } from "../useContext/RecipesContext";
import axios from "axios";


function ViewMoreRecipeDetail() {
    const { recipes, loading, error } = useContext(RecipesContext);


    if (loading) return <p>Loading recipes...</p>;
    if (error) return <p>{error}</p>;

    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
   
  
  
  
  
    useEffect(() => {
      axios.get(`http://localhost:3000/api/product/${id}`)
        .then(response => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("There was an error fetching the product details!", error);
          setError("Failed to load product details.");
          setLoading(false);
        });
    }, [id]);
  
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
  
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes available</p>
        )}
      </div>
  );
}

export default ViewMoreRecipeDetail;

