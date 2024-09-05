import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import V2iewMoreRecipeDetailReview from "./V2iewMoreRecipeDetailReview";
import V3iewMoreRecipeDetail from "./V3iewMoreRecipeDetail";
import V4AddReviewForm from "./V4AddReviewForm";




const V1iewMoreRecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [baristaId, setBaristaId] = useState(null); 
  const [isInWishlist, setIsInWishlist] = useState(false);


  const userId = "66d8d93cfca8fb9362a34a9a"; 

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeResponse = await axios.get(`http://localhost:3000/api/recipes/${id}`);
        setRecipe(recipeResponse.data);
        setBaristaId(recipeResponse.data.baristaId._id);
        console.log(recipeResponse.data.baristaId._id);      } catch (error) {
        console.error("Error fetching recipe details!", error);
        setError("Failed to load recipe details.");
      } finally {
        setLoading(false);
      }
    };





    const fetchReviews = async () => {
        const reviewsResponse = await axios.get(`http://localhost:3000/api/recipes/${id}/reviews`);
        
        // Check if there are reviews
        if (!reviewsResponse.data || reviewsResponse.data.length === 0) {
          console.log("No reviews available for this recipe.");
          setReviews([]); 
          return; 
        }
        
        // If there are reviews, update the state
        setReviews(reviewsResponse.data);
    
    };


    fetchRecipe();
    fetchReviews();
  }, [id]);


 /////////// for wish list recipe //////////////////
 const handleWishlistToggle = async () => {
  try {
      if (isInWishlist) {
          // Remove from wishlist
          await axios.post(`http://localhost:3000/api/users/${userId}/wishlist/remove`, { recipeId: id });
          setIsInWishlist(false);
      } else {
          // Add to wishlist
          await axios.post(`http://localhost:3000/api/users/${userId}/wishlist`, { recipeId: id });
          setIsInWishlist(true);
      }
  } catch (error) {
      console.error("Error updating wishlist!", error);
      setError("Failed to update wishlist.");
  }
};


  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <V2iewMoreRecipeDetailReview recipe={recipe} />
      <V3iewMoreRecipeDetail reviews={reviews} />
      <V4AddReviewForm recipeId={id} userId={userId} baristaId={baristaId}  />




      <button 
        onClick={handleWishlistToggle}
        className={`p-2 mt-4 ${isInWishlist ? 'bg-red-500' : 'bg-blue-500'} text-white rounded`}
      >
        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>

      

    </div>
  );
};

export default V1iewMoreRecipeDetail;