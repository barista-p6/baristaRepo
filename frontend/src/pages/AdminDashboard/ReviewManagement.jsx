
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ReviewManagement = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/reviews"
//         );
//         setReviews(response.data);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/admin/reviews/${id}`);
//       setReviews(reviews.filter((review) => review._id !== id));
//     } catch (error) {
//       console.error("Error deleting review:", error);
//     }
//   };

//   return (
//     <div className="review-management">
//       <h2>Review Management</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Target</th>
//             <th>Rating</th>
//             <th>Comment</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((review) => (
//             <tr key={review._id}>
//               <td>{review.userId.username}</td>
//               <td>{review.targetId.name}</td>
//               <td>{review.rating}</td>
//               <td>{review.comment}</td>
//               <td>
//                 {/* <button onClick={() => handleViewDetails(review._id)}> View Details</button> */}
//                 <button > View Details</button>
//                 <button onClick={() => handleDelete(review._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReviewManagement;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaTrash, FaStar } from "react-icons/fa";

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchReviews = async () => {
      try {

        setLoading(true);

        const response = await axios.get(
          "http://localhost:3000/api/admin/reviews"
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);

      } finally {
        setLoading(false);

      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/admin/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };


  const handleViewDetails = (id) => {
    // Implement view details functionality
    console.log("Viewing details for review:", id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Review Management
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
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviews.map((review) => (
                <tr key={review._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {review.userId.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {review.targetId.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">
                        <FaStar />
                      </span>
                      <span>{review.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap truncate max-w-xs">
                    {review.comment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleViewDetails(review._id)}
                      className="text-blue-600 hover:text-blue-900 mr-2 transition duration-150 ease-in-out"
                    >
                      <FaEye className="inline mr-1" /> View
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
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


export default ReviewManagement;