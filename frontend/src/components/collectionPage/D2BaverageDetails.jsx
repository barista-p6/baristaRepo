// import React, { useContext } from "react";
// import { BeveragesContext } from "../useContext/BeveragesContext"; 

// const BeverageDetails = () => {
//   const { beverages, loading, error } = useContext(BeveragesContext);

//   if (loading) return <p>Loading beverages...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Beverages</h2>
//       {beverages && beverages.length > 0 ? (
//         <ul>
//           {beverages.map(beverage => (
//             <li key={beverage._id}>
//               <h3>{beverage.name}</h3>
//               <p>{beverage.description}</p>
//               <p>Price: ${beverage.price}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No beverages available</p>
//       )}
//     </div>
//   );
// };

// export default BeverageDetails;