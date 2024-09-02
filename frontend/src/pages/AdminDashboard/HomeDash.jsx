import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import BaristaManagement from "./BaristaManagement";
import RecipeManagement from "./RecipeManagement";
import BeverageManagement from "./BeverageManagement ";
import OrderManagement from "./OrderManagement";
import ReviewManagement from "./ManageContactMessages";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <nav>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/baristas">Baristas</Link>
          </li>
          <li>
            <Link to="/admin/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/admin/beverages">Beverages</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/baristas" element={<BaristaManagement />} />
        <Route path="/admin/recipes" element={<RecipeManagement />} />
        <Route path="/admin/beverages" element={<BeverageManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/admin/reviews" element={<ReviewManagement />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;