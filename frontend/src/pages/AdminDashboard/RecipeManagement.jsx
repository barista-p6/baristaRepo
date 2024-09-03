// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RecipeManagement = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/recipes"
//         );
//         setRecipes(response.data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <div className="recipe-management">
//       <h2>Recipe Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Barista</th>
//             <th>Cooking Time</th>
//             <th>Rating</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recipes.map((recipe) => (
//             <tr key={recipe._id}>
//               <td>{recipe.name}</td>
//               <td>{recipe.baristaId.username}</td>
//               <td>{recipe.cookingTime}</td>
//               <td>{recipe.rating.toFixed(1)}</td>
//               <td>
//                 {/* <button onClick={() => handleView(recipe._id)}>View</button> */}
//                 <button >View</button>
//                 {/* <button onClick={() => handleEdit(recipe._id)}>Edit</button> */}
//                 <button >Edit</button>
//                 {/* <button onClick={() => handleDelete(recipe._id)}>Delete</button> */}
//                 <button >Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecipeManagement;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RecipeManagement = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/admin/recipes");
//         setRecipes(response.data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <div className="recipe-management">
//       <h2>Recipe Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Barista</th>
//             <th>Cooking Time</th>
//             <th>Rating</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recipes.map((recipe) => (
//             <tr key={recipe._id}>
//               <td>{recipe.name}</td>
//               <td>{recipe.baristaId ? recipe.baristaId.username : 'Unknown'}</td> {/* التعامل مع حالة عدم وجود baristaId */}
//               <td>{recipe.cookingTime}</td>
//               <td>{recipe.rating.toFixed(1)}</td>
//               <td>
//                 <button>View</button>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecipeManagement;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RecipeManagement = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/admin/recipes");
//         setRecipes(response.data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return (
//     <div className="recipe-management">
//       <h2>Recipe Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Barista</th>
//             <th>Cooking Time</th>
//             <th>Rating</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recipes.map((recipe) => (
//             <tr key={recipe._id}>
//               <td>{recipe.name}</td>
//               <td>{recipe.baristaId ? recipe.baristaId.username : 'Unknown'}</td>
//               <td>{recipe.cookingTime}</td>
//               <td>{recipe.rating.toFixed(1)}</td>
//               <td>
//                 <button>View</button>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecipeManagement;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeManagement = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/recipes");
        setRecipes(response.data);
        console.log(response.data.baristaId.username)
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Error fetching recipes");
      }
    };
    console.log(recipes)

    fetchRecipes();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="recipe-management">
      <h2>Recipe Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Barista</th>
            <th>Cooking Time</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id}>
              <td>{recipe.name}</td>
              {/* <td>{recipe.baristaId.username}</td> */}
              <td>{recipe.cookingTime}</td>
              <td>{recipe.rating.toFixed(1)}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeManagement;
