

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

import Dashboard from './pages/AdminDashboard/Dashboard';
import UserManagement from './pages/AdminDashboard/UserManagement';
import BaristaManagement from './pages/AdminDashboard/BaristaManagement';
import RecipeManagement from './pages/AdminDashboard/RecipeManagement';

import BeverageManagement from './pages/AdminDashboard/BeverageManagement';
import OrderManagement from './pages/AdminDashboard/OrderManagement';
import ReviewManagement from './pages/AdminDashboard/ReviewManagement';
import ManageContactMessages from  './pages/AdminDashboard/ManageContactMessages';
import DailyProfitChart from './pages/AdminDashboard/ProfitManagement';





import CartPage from './pages/Cart/CartPage';


import Collection from './components/collectionPage/collections';
import DetailsCollection from './components/collectionPage/DetailsCollection';


function App() {


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/baristas" element={<BaristaManagement />} />
            <Route path="/admin/recipes" element={<RecipeManagement />} />
            <Route path="/admin/beverages" element={<BeverageManagement />} />
            <Route path="/admin/orders" element={<OrderManagement />} />
            <Route path="/admin/reviews" element={<ReviewManagement />} />
            <Route path="/profit" element={<DailyProfitChart />} />
            <Route
              path="/admin/contact-messages"
              element={<ManageContactMessages />}
            />
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
            <Route path="/cart" element={<CartPage />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/product/:id" element={<DetailsCollection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;




