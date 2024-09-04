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
  const [editingRequest, setEditingRequest] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/admin/requests");
      console.log(response.data); // تسجيل البيانات للتحقق من الشكل

      // إذا كانت البيانات في مفتاح profile، استخراج المصفوفة
      const data = response.data.profile || []; // استخدم مصفوفة فارغة كاحتياطي
      if (Array.isArray(data)) {
        setRequests(data);
      } else {
        console.error("Expected an array but received:", data);
        setRequests([]); // تعيين مصفوفة فارغة إذا لم تكن البيانات مصفوفة
      }
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
                  <td className="px-6 py-4 whitespace-nowrap flex mr-[1rem]">
                    <img 
                      src={`http://localhost:3000/${request.profileImage}`} 
                      alt="Profile" 
                      className="w-12 h-12 object-cover rounded-full"
                    /> {request.baristaId.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.baristaId.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{request.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href={`http://localhost:3000/${request.culinarySchool}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-600 underline"
                    >
                      View Certificate
                    </a>
                  </td>
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