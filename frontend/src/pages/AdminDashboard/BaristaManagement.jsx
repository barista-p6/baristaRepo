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

//               <td>{barista.userId.username}</td>
//               <td>{barista.userId.email}</td>
//               <td>{barista.isApproved ? "Yes" : "No"}</td>
//               <td>${barista.businessDetails.balance.toFixed(2)}</td>

//               <td>
//                 {!barista.isApproved && (
//                   <button onClick={() => handleApprove(barista._id)}>
//                     Approve
//                   </button>
//                 )}
//                 {/* <button onClick={() => handleEdit(barista._id)}>Edit</button> */}

//                 <button>Edit</button>

//                 <button >Edit</button>

//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BaristaManagement;


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

//     <div className="bg-white shadow rounded-lg p-6">
     
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">
//         Barista Management
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Username
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Is Approved
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Balance
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {baristas.map((barista) => (
//               <tr key={barista._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {barista.username}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       barista.isApproved
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {barista.isApproved ? "Yes" : "No"}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   ${barista.balance ? barista.balance.toFixed(2) : "0.00"}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   {!barista.isApproved && (
//                     <button
//                       onClick={() => handleApprove(barista._id)}
//                       className="text-indigo-600 hover:text-indigo-900 mr-2"
//                     >
//                       Approve
//                     </button>
//                   )}
//                   <button className="text-gray-600 hover:text-gray-900">
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

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
//               {/* تأكد من أن الحقول صحيحة بناءً على النموذج الخاص بك */}
//               <td>{barista.username}</td> {/* تغيير هنا بناءً على بنية البيانات */}
//               <td>{barista.email}</td> {/* تغيير هنا بناءً على بنية البيانات */}
//               <td>{barista.isApproved ? "Yes" : "No"}</td>
//               <td>${barista.balance ? barista.balance.toFixed(2) : "0.00"}</td> {/* تأكد من وجود خاصية balance */}
//               {/* إذا كانت خاصية balance موجودة، يتم تحويلها إلى نص باستخدام toFixed(2). هذا يعرض الرقم مع اثنين منازل عشرية بعد الفاصلة العشرية، حتى لو كان الرقم هو صفر. */}
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
import { FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";

const BaristaManagement = () => {
  const [baristas, setBaristas] = useState([]);
  const [baristasStats, setBaristasStats] = useState([]);

  useEffect(() => {
    const fetchBaristas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/baristas");
        setBaristas(response.data);
      } catch (error) {
        console.error("Error fetching baristas:", error);
      }
    };

    fetchBaristas();
  }, []);

  useEffect(() => {
    const fetchBaristasStats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/baristas/stats");
        setBaristasStats(response.data);
      } catch (error) {
        console.error("Error fetching baristas stats:", error);
      }
    };

    fetchBaristasStats();
  }, []);

  // Merge baristas and stats
  const baristaStatsMap = baristasStats.reduce((acc, stats) => {
    acc[stats._id] = stats;
    return acc;
  }, {});

  const toggleBaristaStatus = async (barista) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/admin/baristas/${barista._id}/toggle-status`
      );
      if (response.data) {
        setBaristas(baristas.map((b) =>
          b._id === barista._id ? { ...b, isActive: response.data.isActive } : b
        ));
      }
    } catch (error) {
      console.error("Error toggling barista status:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this barista?")) {
      try {
        await axios.patch(`http://localhost:3000/api/admin/baristas/${id}`);
        // Instead of fetching all users again, you can update the local state
        setBaristas(baristas.filter((barista) => barista._id !== id));
      } catch (error) {
        console.error("Error deleting barista:", error);
      }
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Barista Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num. Of Recipes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num. Of Beverages</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num. Of Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num. Of Reports</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {baristas.map(barista => {
              const stats = baristaStatsMap[barista._id] || { recipeCount: 0, beverageCount: 0, orderCount: 0 };

              return (
                <tr key={barista._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{barista.profilePic} {barista.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{barista.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stats.recipeCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stats.beverageCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stats.orderCount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{barista.report}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleBaristaStatus(barista)}
                      className="focus:outline-none transition-colors duration-200"
                    >
                      {barista.isActive ? (
                        <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 hover:bg-green-200">
                          <FaToggleOn className="mr-1" /> Active
                        </span>
                      ) : (
                        <span className="px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 hover:bg-red-200">
                          <FaToggleOff className="mr-1" /> Inactive
                        </span>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleDelete(barista._id)}
                      className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                    >
                      <FaTrash className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BaristaManagement;






{/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
{!barista.isApproved && (
  <button
    onClick={() => handleApprove(barista._id)}
    className="text-indigo-600 hover:text-indigo-900 mr-2"
  >
    Approve
  </button>
)}
<button className="text-gray-600 hover:text-gray-900">Edit</button>
</td> */}



           {/* <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      barista.isApproved
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {barista.isApproved ? "Yes" : "No"}
                  </span>
                </td> */}
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  ${barista.balance ? barista.balance.toFixed(2) : "0.00"}
                </td> */}











// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BaristaManagement = () => {
//   const [baristas, setBaristas] = useState([]);

//   useEffect(() => {
//     const fetchBaristas = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/admin/baristas");
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
//     <div className="bg-white shadow rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">
//         Barista Management
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Username
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Num. Of Recipes
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Num. Of Beverages
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Num. Of Orders
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {baristas.map((barista) => (
//               <tr key={barista._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {barista.profilePic && <img src={barista.profilePic} alt="Profile Pic" className="w-10 h-10 rounded-full"/>}
//                   {barista.username}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.recipeCount}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.beverageCount}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.orderCount}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   {!barista.isApproved && (
//                     <button
//                       onClick={() => handleApprove(barista._id)}
//                       className="text-indigo-600 hover:text-indigo-900 mr-2"
//                     >
//                       Approve
//                     </button>
//                   )}
//                   <button className="text-gray-600 hover:text-gray-900">
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BaristaManagement;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BaristaManagement = () => {
//   const [baristas, setBaristas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBaristas = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/admin/baristas");
//         setBaristas(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching baristas:", error);
//         setError("Failed to fetch baristas");
//         setLoading(false);
//       }
//     };

//     fetchBaristas();
//   }, []);

//   // const handleApprove = async (id) => {
//   //   try {
//   //     await axios.put(`http://localhost:3000/api/admin/baristas/${id}/approve`);
//   //     setBaristas(
//   //       baristas.map((barista) =>
//   //         barista._id === id ? { ...barista, isApproved: true } : barista
//   //       )
//   //     );
//   //   } catch (error) {
//   //     console.error("Error approving barista:", error);
//   //   }
//   // };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="bg-white shadow rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Barista Management</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num. Of Recipes</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num. Of Beverages</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num. Of Orders</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {baristas.map((barista) => (
//               <tr key={barista._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {barista.profilePic && <img src={barista.profilePic} alt="Profile Pic" className="w-10 h-10 rounded-full" />}
//                   {barista.username}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.recipeCount}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.beverageCount}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{barista.orderCount}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   {!barista.isApproved && (
//                     <button
//                       onClick={() => handleApprove(barista._id)}
//                       className="text-indigo-600 hover:text-indigo-900 mr-2"
//                     >
//                       Approve
//                     </button>
//                   )}
//                   <button className="text-gray-600 hover:text-gray-900">
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BaristaManagement;
