import React from 'react';
import { Star } from 'lucide-react';

const ReviewList = ({ reviews }) => (
  <div className="space-y-4 mt-4">
    {reviews.length > 0 ? (
      reviews.map((review) => (
        <div key={review._id} className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <div className="flex items-center">
              <Star size={16} className="text-yellow-500 mr-1" />
              <span>{review.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-2">{review.comment}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{new Date(review.createdAt).toLocaleDateString()}</span>
            <button className="text-yellow-500 hover:underline">Edit Review</button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-400 text-center">No reviews found.</p>
    )}
  </div>
);

export default ReviewList;
