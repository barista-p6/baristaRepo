import React, { useState } from 'react';
import { Star, Edit, ThumbsUp, MessageSquare } from 'lucide-react';

const ReviewList = ({ reviews, onUpdateReview }) => {
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editComment, setEditComment] = useState('');
  const [editRating, setEditRating] = useState('');

  const handleEditClick = (review) => {
    setEditingReviewId(review._id);
    setEditComment(review.comment);
    setEditRating(review.rating);
  };

  const handleUpdateClick = () => {
    if (editingReviewId) {
      onUpdateReview(editingReviewId, { comment: editComment, rating: editRating });
      setEditingReviewId(null);
    }
  };

  return (
    <div className="space-y-8 mt-8">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <img src={review.avatar || '/default-avatar.png'} alt="" className="w-10 h-10 rounded-full mr-3 border-2 border-yellow-400" />
                {review.name}
              </h3>
              <div className="flex items-center bg-yellow-400 rounded-full px-3 py-1 animate-pulse">
                <Star size={18} className="text-gray-800 mr-1" />
                <span className="font-semibold text-gray-800">{review.rating}</span>
              </div>
            </div>
            {review.recipeId && (
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src={review.recipeId.photos} 
                  alt={review.recipeId.name} 
                  className="w-full h-56 object-cover rounded-lg transition duration-300 transform hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h4 className="text-lg font-semibold text-yellow-400">Recipe: {review.recipeId.name}</h4>
                </div>
              </div>
            )}
            {editingReviewId === review._id ? (
              <div className="mb-4">
                <textarea
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white"
                  rows="3"
                />
                <div className="flex space-x-2 mt-2">
                  <input
                    type="number"
                    value={editRating}
                    onChange={(e) => setEditRating(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white"
                    min="1"
                    max="5"
                  />
                  <button
                    onClick={handleUpdateClick}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-gray-300 mb-4 leading-relaxed">{review.comment}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300">
                      <ThumbsUp size={16} className="mr-1" />
                      <span>Like</span>
                    </button>
                    
                    <button
                      onClick={() => handleEditClick(review)}
                      className="flex items-center text-yellow-400 hover:text-yellow-300 transition duration-300 group"
                    >
                      <Edit size={16} className="mr-1 transition-transform duration-300 group-hover:rotate-12" />
                      <span>Edit Review</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <div className="text-center py-16 animate-bounce">
          <MessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-2xl text-gray-400">No reviews found. Be the first to add a review!</p>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
