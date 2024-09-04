import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import UserProfilePage from './pages/UserProfile/UserProfilePage';


import RecipeDetailPage from './pages/RecipeDetail/RecipeDetail';
import MarketplacePage from './pages/Marketplace/Marketplace';
import DrinkDetailPage from './pages/DrinkDetail/DrinkDetailPage';

import RecipeCategoriesPage from './pages/RecipeCategoriesPage/RecipeCategories';
import AboutChiefPage from './pages/AboutChiefPage/AboutChiefPage';

import ContactUsPage from './pages/ContactUs/ContactUs';
import AdminDashboard from './pages/AdminDashboard/HomeDash';

import ProfileAuth from './pages/ChefProfileAuth/ProfileAuth';
import ChefProfile from './pages/baristaProfile/baristaProfile';
import Login from './pages/Login/Login';
import RegisterBarista from './pages/sign up/signUp';

import BaristaADashboard from './pages/baristaProfile/Dashboard Barista/dashboard';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/drink/:id" element={<DrinkDetailPage />} />
            <Route path="/categories" element={<RecipeCategoriesPage />} />
            <Route path="/AboutChief" element={<AboutChiefPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/ProfileAuth" element={<ProfileAuth />} />
            <Route path="/chefprofile" element={<ChefProfile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/RegisterBarista" element={<RegisterBarista />} />
            <Route path="/BaristaADashboard" element={<BaristaADashboard />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;