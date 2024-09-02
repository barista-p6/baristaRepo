import React, { useState, useEffect } from "react";
import axios from "axios";

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/reviews"
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
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

  return (
    <div className="review-management">
      <h2>Review Management</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Target</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <td>{review.userId.username}</td>
              <td>{review.targetId.name}</td>
              <td>{review.rating}</td>
              <td>{review.comment}</td>
              <td>
                {/* <button onClick={() => handleViewDetails(review._id)}> View Details</button> */}
                <button > View Details</button>
                <button onClick={() => handleDelete(review._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewManagement;