import React, { useState } from 'react';
import axios from 'axios';
import { Star, Send } from 'lucide-react';

const StarRating = ({ rating, onRatingChange = null }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
          } ${onRatingChange ? 'cursor-pointer' : ''}`}
          onClick={() => onRatingChange && onRatingChange(i + 1)}
        />
      ))}
    </div>
  );
};

const EnhancedRecipeReviews = ({ recipeId, userId, baristaId, Reviews = [] }) => {
 
  const [reviews, setReviews] = useState(Reviews);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/api/recipes/${recipeId}/reviews`, {
        userId,
        baristaId,
        rating: newReview.rating,
        comment: newReview.comment
      });
      setSuccess("Review added successfully!");
      setReviews([...reviews, response.data]); // Assuming the API returns the newly created review
      setNewReview({ rating: 0, comment: '' });
    } catch (error) {
      setError("Failed to add review.");
    }
  };

  return (
    <div className="space-y-6 max-w-3xl  font-light mx-auto">
      <div className="bg-white bg-opacity-20 backdrop-blur-md border border-gray-600 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-black ">Reviews for this recipe </h2>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-800">No reviews available for this recipe.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-700 last:border-b-0">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                  <img
                    src={review.userId?.avatar || "/default-avatar.png"}
                    alt={review.userId?.username || "Anonymous"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span className="font-semibold">{review.userId?.username || "Anonymous"}</span>
                    <span className="text-xs">{review.date || ""}</span>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="mt-2">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white bg-opacity-20 backdrop-blur-md border border-gray-600 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-black ">Add Your Review</h2>
        {error && <div className="bg-red-800 border border-red-900 text-red-100 px-4 py-2 rounded mb-4 text-sm">{error}</div>}
        {success && <div className="bg-green-800 border border-green-900 text-green-100 px-4 py-2 rounded mb-4 text-sm">{success}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <StarRating 
              rating={newReview.rating} 
              onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
            />
          </div>
          <textarea
            className="w-full p-3 border border-gray-700 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Share your thoughts about this recipe..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            rows={4}
            required
          />
          <button type="submit" className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300 flex items-center justify-center">
            <Send className="w-5 h-5 mr-2" />
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnhancedRecipeReviews;
