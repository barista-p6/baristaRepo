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

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/admin/users/${editingUser._id}`,
        editingUser
      );
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this user?")) {
  //     try {
  //       await axios.delete(`http://localhost:3000/api/admin/users/${id}`);
  //       fetchUsers();
  //     } catch (error) {
  //       console.error("Error deleting user:", error);
  //     }
  //   }
  // };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3000/api/admin/users/${id}`);
        // Instead of fetching all users again, you can update the local state
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  // const toggleUserStatus = async (user) => {
  //   try {
  //     const response = await axios.patch(
  //       `http://localhost:3000/api/admin/users/${user._id}/toggle-status`
  //     );
  //     if (response.data) {
  //       // Update the user in the local state
  //       setUsers(users.map((u) => (u._id === user._id ? response.data : u)));
  //     }
  //   } catch (error) {
  //     console.error("Error toggling user status:", error);
  //   }
  // };
  const toggleUserStatus = async (user) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/admin/users/${user._id}/toggle-status`
      );
      if (response.data) {
        // تحديث المستخدم في حالة الـ state المحلية
        setUsers(users.map((u) => (u._id === user._id ? response.data : u)));
      }
    } catch (error) {
      console.error("Error toggling user status:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">User Management</h2>
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
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Is Barista
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Is Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="text"
                        value={editingUser.username}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            username: e.target.value,
                          })
                        }
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      user.username
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="email"
                        value={editingUser.email}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            email: e.target.value,
                          })
                        }
                        className="border rounded px-2 py-1"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.isBarista ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <FaCheck className="mr-1" /> Yes
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        <FaTimes className="mr-1" /> No
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleUserStatus(user)}
                      className="focus:outline-none transition-colors duration-200"
                    >
                      {user.isActive ? (
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
                    {editingUser && editingUser._id === user._id ? (
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
                    )}
                    <button
                      onClick={() => handleDelete(user._id)}
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



export default UserManagement;

