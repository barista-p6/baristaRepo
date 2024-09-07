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

import { RecipesProvider } from './components/useContext/RecipesContext';
import ProfileAuth from './pages/ChefProfileAuth/ProfileAuth';
import ChefProfile from './pages/baristaProfile/baristaProfile';
import Login from './pages/Login/Login';
import RegisterBarista from './pages/sign up/signUp';

import BaristaADashboard from './pages/baristaProfile/Dashboard Barista/dashboard';

import Dashboard from './pages/AdminDashboard/Dashboard';
import UserManagement from './pages/AdminDashboard/UserManagement';
import BaristaManagement from './pages/AdminDashboard/BaristaManagement';
import RecipeManagement from './pages/AdminDashboard/RecipeManagement';

import BeverageManagement from './pages/AdminDashboard/BeverageManagement';
import OrderManagement from './pages/AdminDashboard/OrderManagement';
import ReviewManagement from './pages/AdminDashboard/ReviewManagement';
import BaristaRequestManagement from './pages/AdminDashboard/BaristaRequest';



import CartPage from './pages/Cart/CartPage';



import Collection from './components/collectionPage/Collections1';
import DetailsCollection from './components/collectionPage/D1etailsCollection';
import V1iewMoreRecipeDetail from './components/collectionPage/V1iewMoreRecipeDetail';

import BrowseProducts from './pages/Marketplace/BrowseProductsPage';
import ManageContactMessages from './pages/AdminDashboard/ManageContactMessages';


import CheckoutPage from './pages/Checkout/CheckoutPage';

import CartCheckoutFlow from './pages/CartAndCheckout/CartCheckoutFlow';

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
            <Route
              path="/admin/requests"
              element={<BaristaRequestManagement />}
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
            <Route path="/ProfileAuth" element={<ProfileAuth />} />
            <Route path="/chefprofile" element={<ChefProfile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/RegisterBarista" element={<RegisterBarista />} />
            <Route path="/BaristaADashboard" element={<BaristaADashboard />} />
            {/* <Route path="/cart" element={<CartPage />} /> */}
            <Route path="/Collection" element={<Collection />} />
            <Route path="/product/:id" element={<DetailsCollection />} />
            <Route path="/market" element={<BrowseProducts />} />
            <Route path="/recipes/:id" element={<V1iewMoreRecipeDetail />} />
            <Route
              path="/admin/contact-messages"
              element={<ManageContactMessages />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/cart" element={<CartCheckoutFlow />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
