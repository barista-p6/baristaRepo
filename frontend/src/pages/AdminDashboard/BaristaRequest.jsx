
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";



const BaristaRequestManagement = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRequests, setEditingRequests] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/admin/requests");
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

 


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        await axios.patch(`http://localhost:3000/api/admin/requests/${id}`);
       
        setRequests(requests.filter((request) => request._id !== id));
      } catch (error) {
        console.error("Error deleting request:", error);
      }
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Requests Management</h2>
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
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Certifications
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap"><img 
                  src={`http://localhost:3000/${barista.profileImage}`} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                /> {request.profileImage}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.baristaId.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><a 
                  href={`http://localhost:3000/${barista.culinarySchool}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  View Certificate
                </a></td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleDelete(request._id)}
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

export default BaristaRequestManagement;





 // const handleEdit = (request) => {
  //   setEditingRequests(request);
  // };

  // const handleSave = async () => {
  //   try {
  //     await axios.put(
  //       `http://localhost:3000/api/admin/requests/${editingRequest._id}`,
  //       editingRequest
  //     );
  //     setEditingRequests(null);
  //     fetchRequests();
  //   } catch (error) {
  //     console.error("Error updating request:", error);
  //   }
  // };



    // const toggleRequestStatus = async (request) => {
  //   try {
  //     const response = await axios.patch(
  //       `http://localhost:3000/api/admin/requests/${request._id}/toggle-status`
  //     );
  //     if (response.data) {
  //       // تحديث المستخدم في حالة الـ state المحلية
  //       setUsers(users.map((u) => (u._id === user._id ? response.data : u)));
  //     }
  //   } catch (error) {
  //     console.error("Error toggling user status:", error);
  //   }
  // };


//   <td className="px-6 py-4 whitespace-nowrap">
//   {editingUser && editingUser._id === user._id ? (
//     <div>
//       <input
//         type="text"
//         value={editingUser.socialLinks?.facebook || ''}
//         onChange={(e) =>
//           setEditingUser({
//             ...editingUser,
//             socialLinks: {
//               ...editingUser.socialLinks,
//               facebook: e.target.value,
//             },
//           })
//         }
//         placeholder="Facebook URL"
//         className="border rounded px-2 py-1 mb-1 block"
//       />
//       <input
//         type="text"
//         value={editingUser.socialLinks?.instagram || ''}
//         onChange={(e) =>
//           setEditingUser({
//             ...editingUser,
//             socialLinks: {
//               ...editingUser.socialLinks,
//               instagram: e.target.value,
//             },
//           })
//         }
//         placeholder="Instagram URL"
//         className="border rounded px-2 py-1 mb-1 block"
//       />
//       <input
//         type="text"
//         value={editingUser.socialLinks?.twitter || ''}
//         onChange={(e) =>
//           setEditingUser({
//             ...editingUser,
//             socialLinks: {
//               ...editingUser.socialLinks,
//               twitter: e.target.value,
//             },
//           })
//         }
//         placeholder="Twitter URL"
//         className="border rounded px-2 py-1"
//       />
//     </div>
//   ) : (
//     <div className="flex">
//     <SocialIcon
//       platform="facebook"
//       url={user.socialLinks?.facebook}
//     />
//     <SocialIcon
//       platform="instagram"
//       url={user.socialLinks?.instagram}
//     />
//     <SocialIcon
//       platform="twitter"
//       url={user.socialLinks?.twitter}
//     />
//   </div>
//   )}
// </td>


    {/* {editingUser && editingUser._id === user._id ? (
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:text-green-900 mr-2 transition duration-150 ease-in-out"
                      >
                        <FaCheck className="inline mr-1" /> Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-indigo-600 hover:text-indigo-900 mr-2 transition duration-150 ease-in-out"
                      >
                        <FaEdit className="inline mr-1" /> Edit
                      </button>
                    )} */}