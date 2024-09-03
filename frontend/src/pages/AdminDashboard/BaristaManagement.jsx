// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BaristaManagement = () => {
//   const [baristas, setBaristas] = useState([]);

//   useEffect(() => {
//     const fetchBaristas = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/baristas"
//         );
//         setBaristas(response.data);
//       } catch (error) {
//         console.error("Error fetching baristas:", error);
//       }
//     };

//     fetchBaristas();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       await axios.put(`http://localhost:3000/api/admin/baristas/${id}/approve`);
//       setBaristas(
//         baristas.map((barista) =>
//           barista._id === id ? { ...barista, isApproved: true } : barista
//         )
//       );
//     } catch (error) {
//       console.error("Error approving barista:", error);
//     }
//   };

//   return (
//     <div className="barista-management">
//       <h2>Barista Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Is Approved</th>
//             <th>Balance</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {baristas.map((barista) => (
//             <tr key={barista._id}>
//               <td>{barista.username}</td>{" "}
//               <td>{barista.email}</td>
//               <td>{barista.isApproved ? "Yes" : "No"}</td>
//               <td>
//                 ${barista.balance ? barista.balance.toFixed(2) : "0.00"}
//               </td>{" "}
//               <td>
//                 {!barista.isApproved && (
//                   <button onClick={() => handleApprove(barista._id)}>
//                     Approve
//                   </button>
//                 )}
//                 {/* <button onClick={() => handleEdit(barista._id)}>Edit</button> */}
//                 <button>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BaristaManagement;

import React, { useState, useEffect } from "react";
import axios from "axios";

const BaristaManagement = () => {
  const [baristas, setBaristas] = useState([]);

  useEffect(() => {
    const fetchBaristas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/baristas"
        );
        setBaristas(response.data);
      } catch (error) {
        console.error("Error fetching baristas:", error);
      }
    };

    fetchBaristas();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/admin/baristas/${id}/approve`);
      setBaristas(
        baristas.map((barista) =>
          barista._id === id ? { ...barista, isApproved: true } : barista
        )
      );
    } catch (error) {
      console.error("Error approving barista:", error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
     
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Barista Management
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Is Approved
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {baristas.map((barista) => (
              <tr key={barista._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {barista.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{barista.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      barista.isApproved
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {barista.isApproved ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${barista.balance ? barista.balance.toFixed(2) : "0.00"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {!barista.isApproved && (
                    <button
                      onClick={() => handleApprove(barista._id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Approve
                    </button>
                  )}
                  <button className="text-gray-600 hover:text-gray-900">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BaristaManagement;