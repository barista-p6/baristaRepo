import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User, Coffee, Clock, ShoppingBag, Star } from 'lucide-react';
import RecipeGrid from './RecipeGrid';
import ReviewList from './ReviewList';


const BaristaUserProfile = () => {
  const [activeTab, setActiveTab] = useState('saved');
  const [user, setUser] = useState(null);
  const [recentViews, setRecentViews] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = '66dbfc9e6e6e7a3fe903bf9b';
  









        const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
        setUser(response.data);
        console.log('User Data:', response.data);
  








        const recentViewsResponse = await axios.get(`http://localhost:3000/api/${userId}/recent-view`);
        console.log('Recent Views Response:', recentViewsResponse.data);
  
        if (recentViewsResponse.data.recentView) {
          // Filter out entries with null recipeId
          const validRecentViews = recentViewsResponse.data.recentView.filter(item => item.recipeId !== null);
  
          setRecentViews(validRecentViews);
          console.log('Valid Recent Views:', validRecentViews);







          const responseReview = await axios.get(`http://localhost:3000/api/user/${userId}/review`);
        setReviews(responseReview.data.review );  // Ensure reviews are set correctly
        console.log('User Reviews:', reviews);


        } else {
          console.error('recentView not found in the response');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
  
    fetchUserData();
  }, []);

  if (!user) {
    return <p className="text-white text-center mt-8">Loading user data...</p>;
  }




  

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-[url('https://www.1883.com/app/uploads/2021/04/des-sirops-d-excellence.jpg')] bg-cover bg-center h-40 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl font-bold"> User Profile </h1>
        </div>
      </header>

      {/* User Info */}
      <div className="container mx-auto mt-8 px-4">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500">
            <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={user.username} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <p className="text-gray-400">{user.email}</p>
            <div className="mt-2 flex space-x-4">
              <span className="text-sm">{user.wishlist.length} Saved Recipes</span>
              <span className="text-sm">{user.purchasedDishes?.length || 0} Purchased</span>
            </div>
          </div>
          <button className="ml-auto bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition">
            Edit Profile
          </button>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="grid w-full grid-cols-4 mb-4 rounded-lg overflow-hidden">
            {[
              { name: 'saved', icon: <Coffee size={18} /> },
              { name: 'recent', icon: <Clock size={18} /> },
              { name: 'purchased', icon: <ShoppingBag size={18} /> },
              { name: 'reviews', icon: <Star size={18} /> },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`py-2 text-center flex items-center justify-center ${
                  activeTab === tab.name ? 'bg-yellow-500 text-black' : 'bg-gray-800'
                } hover:bg-yellow-600 hover:text-black transition`}
              >
                {tab.icon}
                <span className="ml-2">{tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}</span>
              </button>
            ))}
          </div>
          <div>
            {activeTab === 'saved' && <RecipeGrid recipes={user.wishlist.map(item => item.recipeId)} />}
            {activeTab === 'recent' && <RecipeGrid recipes={recentViews.map(view => (view.recipeId))} icon={<Clock size={18} />} />}
            {activeTab === 'purchased' && <RecipeGrid recipes={user.purchasedDishes || []} icon={<ShoppingBag size={18} />} />}
            {activeTab === 'reviews' && <ReviewList reviews={ reviews || []} />}
          </div>
        </div>
      </div>
    </div>
  );
};









export default BaristaUserProfile;