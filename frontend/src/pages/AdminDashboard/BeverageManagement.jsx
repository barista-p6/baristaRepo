// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BeverageManagement = () => {
//   const [beverages, setBeverages] = useState([]);

//   useEffect(() => {
//     const fetchBeverages = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/beverages"
//         );
//         setBeverages(response.data);
//       } catch (error) {
//         console.error("Error fetching beverages:", error);
//       }
//     };

//     fetchBeverages();
//   }, []);

//   return (
//     <div className="beverage-management">
//       <h2>Beverage Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Barista</th>
//             <th>Price</th>
//             <th>Quantity Available</th>
//             <th>Rating</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {beverages.map((beverage) => (
//             <tr key={beverage._id}>
//               <td>{beverage.name}</td>
//               <td>{beverage.baristaId.username}</td>
//               <td>${beverage.price.toFixed(2)}</td>
//               <td>{beverage.quantityAvailable}</td>
//               <td>{beverage.rating.toFixed(1)}</td>
//               <td>
//                 {/* <button onClick={() => handleView(beverage._id)}>View</button> */}
//                 <button >View</button>
//                 {/* <button onClick={() => handleEdit(beverage._id)}>Edit</button> */}
//                 <button>Edit</button>
//                 {/* <button onClick={() => handleDelete(beverage._id)}> Delete</button> */}
//                 <button > Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BeverageManagement;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const BeverageManagement = () => {
  const [beverages, setBeverages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeverages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:3000/api/admin/beverages"
        );
        setBeverages(response.data);
      } catch (error) {
        console.error("Error fetching beverages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeverages();
  }, []);

  const handleView = (id) => {
    // Implement view functionality
    console.log("Viewing beverage with id:", id);
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Editing beverage with id:", id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log("Deleting beverage with id:", id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Beverage Management
      </h2>
      {loading ? (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Barista
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {beverages.map((beverage) => (
                <tr key={beverage._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {beverage.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {beverage.baristaId.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${beverage.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {beverage.quantityAvailable}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"></span>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {beverage.rating.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleView(beverage._id)}
                      className="text-blue-600 hover:text-blue-900 mr-2 transition duration-150 ease-in-out"
                    >
                      <FaEye className="inline mr-1" /> View
                    </button>
                    <button
                      onClick={() => handleEdit(beverage._id)}
                      className="text-green-600 hover:text-green-900 mr-2 transition duration-150 ease-in-out"
                    >
                      <FaEdit className="inline mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(beverage._id)}
                      className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                    >
                      <FaTrash className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BeverageManagement;