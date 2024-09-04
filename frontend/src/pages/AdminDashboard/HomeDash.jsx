
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import UserManagement from './UserManagement';
// import BaristaManagement from './BaristaManagement';
// import RecipeManagement from './RecipeManagement';
// import BeverageManagement from './BeverageManagement';
// import OrderManagement from './OrderManagement';
// import ReviewManagement from './ManageContactMessages';

// const AdminDashboard = () => {
//   return (
//     <Router>
//       <div className="admin-dashboard">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/admin">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/admin/users">Users</Link>
//             </li>
//             <li>
//               <Link to="/admin/baristas">Baristas</Link>
//             </li>
//             <li>
//               <Link to="/admin/recipes">Recipes</Link>
//             </li>
//             <li>
//               <Link to="/admin/beverages">Beverages</Link>
//             </li>
//             <li>
//               <Link to="/admin/orders">Orders</Link>
//             </li>
//             <li>
//               <Link to="/admin/reviews">Reviews</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route exact path="/admin" component={Dashboard} />
//           <Route path="/admin/users" component={UserManagement} />
//           <Route path="/admin/baristas" component={BaristaManagement} />
//           <Route path="/admin/recipes" component={RecipeManagement} />
//           <Route path="/admin/beverages" component={BeverageManagement} />
//           <Route path="/admin/orders" component={OrderManagement} />
//           <Route path="/admin/reviews" component={ReviewManagement} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default AdminDashboard;





import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCoffee,
  FaBook,
  FaGlassWhiskey,
  FaShoppingCart,
  FaComments,
} from "react-icons/fa";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import BaristaManagement from "./BaristaManagement";
import RecipeManagement from "./RecipeManagement";
import BeverageManagement from "./BeverageManagement";
import OrderManagement from "./OrderManagement";
import ReviewManagement from "./ReviewManagement";
import BaristaRequestManagement from "./BaristaRequest";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <ul className="mt-4">
          <NavItem to="/admin" icon={<FaHome />} text="Dashboard" />
          <NavItem to="/admin/users" icon={<FaUsers />} text="Users" />
          <NavItem to="/admin/baristas" icon={<FaCoffee />} text="Baristas" />
          <NavItem to="/admin/recipes" icon={<FaBook />} text="Recipes" />
          <NavItem
            to="/admin/beverages"
            icon={<FaGlassWhiskey />}
            text="Beverages"
          />
          <NavItem to="/admin/orders" icon={<FaShoppingCart />} text="Orders" />
          <NavItem to="/admin/reviews" icon={<FaComments />} text="Reviews" />
          <NavItem to="/admin/requests" icon={<FaComments />} text="Requests" />
        </ul>
      </nav>

      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/admin/*" element={<Dashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/baristas" element={<BaristaManagement />} />
          <Route path="/admin/recipes" element={<RecipeManagement />} />
          <Route path="/admin/beverages" element={<BeverageManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/reviews" element={<ReviewManagement />} />
          <Route path="/admin/requests" element={<BaristaRequestManagement />} />
        </Routes>
      </main>
    </div>
  );
};

const NavItem = ({ to ,icon, text }) => (
  <li>
    <Link
      to={to}
      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
    >
      <span className="mr-3 text-lg">{icon}</span>
      {text}
    </Link>
  </li>
);

export default AdminDashboard;









// import React from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import {
//   FaHome,
//   FaUsers,
//   FaCoffee,
//   FaBook,
//   FaGlassWhiskey,
//   FaShoppingCart,
//   FaComments,
// } from "react-icons/fa";
// import Dashboard from "./Dashboard";
// import UserManagement from "./UserManagement";
// import BaristaManagement from "./BaristaManagement";
// import RecipeManagement from "./RecipeManagement";
// import BeverageManagement from "./BeverageManagement";
// import OrderManagement from "./OrderManagement";
// import ReviewManagement from "./ReviewManagement";

// const AdminDashboard = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <header className="bg-gray-800 text-white p-4">
//         <h1 className="text-2xl font-bold">Admin Panel</h1>
//       </header>
      
//       <nav className="bg-gray-200 p-4">
//         <ul className="flex space-x-4">
//           <NavItem to="/" icon={<FaHome />} text="Dashboard" />
//           <NavItem to="/users" icon={<FaUsers />} text="Users" />
//           <NavItem to="/baristas" icon={<FaCoffee />} text="Baristas" />
//           <NavItem to="/recipes" icon={<FaBook />} text="Recipes" />
//           <NavItem to="/beverages" icon={<FaGlassWhiskey />} text="Beverages" />
//           <NavItem to="/orders" icon={<FaShoppingCart />} text="Orders" />
//           <NavItem to="/reviews" icon={<FaComments />} text="Reviews" />
//         </ul>
//       </nav>

//       <main className="flex-grow p-4">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/users" element={<UserManagement />} />
//           <Route path="/baristas" element={<BaristaManagement />} />
//           <Route path="/recipes" element={<RecipeManagement />} />
//           <Route path="/beverages" element={<BeverageManagement />} />
//           <Route path="/orders" element={<OrderManagement />} />
//           <Route path="/reviews" element={<ReviewManagement />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// const NavItem = ({ to, icon, text }) => (
//   <li>
//     <Link to={to} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
//       {icon}
//       <span>{text}</span>
//     </Link>
//   </li>
// );

// export default AdminDashboard;