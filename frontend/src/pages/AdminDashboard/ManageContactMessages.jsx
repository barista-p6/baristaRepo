// import React, { useState, useEffect } from "react";
// import {
  
//   FaHome,
//   FaUsers,
//   FaCoffee,
//   FaBook,
//   FaGlassWhiskey,
//   FaShoppingCart,
//   FaComments,
//   FaEnvelope,
// } from "react-icons/fa";
// import axios from "axios";
// import { Link } from "react-router-dom";


// const ReviewMessage = () => {
//   const [messages, setMessages] = useState([]); // Initialize with an empty array
//   const [loading, setLoading] = useState(true); // To handle loading state
//   const [error, setError] = useState(null); // To handle errors

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/contacts"
//         ); // Adjust URL if necessary
//         setMessages(response.data.data);
//         setLoading(false); // Set loading to false when data is fetched
//       } catch (error) {
//         setError("Error fetching contact messages");
//         setLoading(false); // Set loading to false if error occurs
//       }
//     };
//     fetchMessages();
//   }, []);
//     const NavItem = ({ to, icon, text }) => (
//       <li>
//         <Link
//           to={to}
//           className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
//         >
//           <span className="mr-3 text-lg">{icon}</span>
//           {text}
//         </Link>
//       </li>
//     );

//   if (loading) return <p>Loading...</p>; // Show loading indicator

//   if (error) return <p>{error}</p>; // Show error message if there's an error

//   return (
//      <div className="flex bg-gray-100 min-h-screen">
//       {/* Sidebar Navigation */}
//       <nav className="w-64 bg-white shadow-lg fixed h-screen">
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
//           <ul className="mt-5">
//             <NavItem to="/admin" icon={<FaHome />} text="Dashboard" />
//             <NavItem to="/admin/users" icon={<FaUsers />} text="Users" />
//             <NavItem to="/admin/baristas" icon={<FaCoffee />} text="Baristas" />
//             <NavItem to="/admin/recipes" icon={<FaBook />} text="Recipes" />
//             <NavItem to="/admin/beverages" icon={<FaGlassWhiskey />} text="Beverages" />
//             <NavItem to="/admin/orders" icon={<FaShoppingCart />} text="Orders" />
//             <NavItem to="/admin/reviews" icon={<FaComments />} text="Reviews" />
//             <NavItem to="/admin/contact-messages" icon={<FaEnvelope />} text="Contact Messages" />
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 ml-64 p-8">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Messages</h2>
//           {/* Loading Spinner */}
//           {loading ? (
//             <div className="flex justify-center items-center py-4">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//             </div>
//           ) : (
//             <div className="overflow-x-auto">
//               {/* Contact Messages List */}
//               {messages && messages.length > 0 ? (
//                 <ul className="divide-y divide-gray-200">
//                   {messages.map((message) => (
//                     <li key={message._id} className="py-4">
//                       <p>
//                         <strong className="font-semibold">{message.username}</strong>: {message.message}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         <em>Email:</em> {message.email} <br />
//                         <em>Sent on:</em> {new Date(message.createdAt).toLocaleString()}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No contact messages found.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ReviewMessage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEnvelope } from "react-icons/fa";
import AdminDashboard from "./HomeDash";

const ReviewMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMessages();
  }, [currentPage]);
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/admin/contacts", {
        params: {
          page: currentPage,
          limit: 9, // Update limit to 9
        },
      });
      setMessages(response.data.data);
      setTotalPages(response.data.totalPages || 1); // Ensure your backend sends totalPages
      setLoading(false);
    } catch (error) {
      setError("Error fetching contact messages");
      setLoading(false);
    }
  };
  

  const handleEmailClick = (email) => {
    const subject = "New Message";
    const body = "Hello, I would like to get in touch with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank", "width=600,height=600");
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminDashboard />
      <div className="flex flex-col ml-8 w-full mt-[3rem]">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Messages</h2>
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md divide-y divide-gray-200">
              <thead className="bg-gray-50 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Sent on
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {message.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {message.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {message.message.length > 50
                        ? `${message.message.substring(0, 50)}...`
                        : message.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(message.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEmailClick(message.email)}
                        className="text-blue-600 hover:text-blue-900 transition duration-150 ease-in-out"
                      >
                        <FaEnvelope className="inline mr-1" /> Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewMessage;