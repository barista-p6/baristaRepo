// import React, { useContext } from "react";
// import { RecipesContext } from "../useContext/RecipesContext";
// import { Link } from "react-router-dom";

// const RecipesDetails = () => {
//   const { recipes, loading, error } = useContext(RecipesContext);

//   if (loading) return <p>Loading recipes...</p>;
//   if (error) return <p>{error}</p>;
//   return (
//     <div>
//       <h2>Recipes</h2>
//       {recipes && recipes.length > 0 ? (
//         <ul>
//           {recipes.map(recipe => (
//             <li key={recipe._id}>
//               <h3>{recipe.name}</h3>
//               <img src={recipe.bg}  className="mx-auto h-48 object-cover p-3 transition duration-300 ease-in-out transform group-hover:scale-105" />

//               <p>Categories: {recipe.categories.join(", ")}</p>
             

//               <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(", ")}</p>
//               <Link to={`/recipes/${recipe._id}`} className="view-more-link">
//                 View More Details
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No recipes available</p>
//       )}
//     </div>
//   );
// };

// export default RecipesDetails;