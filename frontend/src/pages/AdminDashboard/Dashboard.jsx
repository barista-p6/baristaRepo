
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [stats, setStats] = useState(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/admin/dashboard-stats"
//         );
//         setStats(response.data);
//       } catch (error) {
//         console.error("Error fetching dashboard stats:", error);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (!stats) return <div>Loading...</div>;

//   return (
//     <div className="dashboard">
//       hhhhh
//       <h2>Dashboard Overview</h2>
//       <div className="stats-grid">
//         <div className="stat-card">
//           <h3>Total Users</h3>
//           <p>{stats.userCount}</p>
//         </div>
//         <div className="stat-card">
//           <h3>Total Baristas</h3>
//           <p>{stats.baristaCount}</p>
//         </div>
//         <div className="stat-card">
//           <h3>Total Recipes</h3>
//           <p>{stats.recipeCount}</p>
//         </div>
//         <div className="stat-card">
//           <h3>Total Beverages</h3>
//           <p>{stats.beverageCount}</p>
//         </div>
//         <div className="stat-card">
//           <h3>Total Orders</h3>
//           <p>{stats.orderCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUsers,
  FaCoffee,
  FaBook,
  FaGlassWhiskey,
  FaShoppingCart,
} from "react-icons/fa";

import React, { useState, useEffect } from "react";
import axios from "axios";


const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/admin/dashboard-stats"
        );
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);


  if (!stats)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  const StatCard = ({ title, value, icon }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
      <div className="text-3xl text-blue-500 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="dashboard bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          value={stats.userCount}
          icon={<FaUsers />}
        />
        <StatCard
          title="Total Baristas"
          value={stats.baristaCount}
          icon={<FaCoffee />}
        />
        <StatCard
          title="Total Recipes"
          value={stats.recipeCount}
          icon={<FaBook />}
        />
        <StatCard
          title="Total Beverages"
          value={stats.beverageCount}
          icon={<FaGlassWhiskey />}
        />
        <StatCard
          title="Total Orders"
          value={stats.orderCount}
          icon={<FaShoppingCart />}
        />

  if (!stats) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.userCount}</p>
        </div>
        <div className="stat-card">
          <h3>Total Baristas</h3>
          <p>{stats.baristaCount}</p>
        </div>
        <div className="stat-card">
          <h3>Total Recipes</h3>
          <p>{stats.recipeCount}</p>
        </div>
        <div className="stat-card">
          <h3>Total Beverages</h3>
          <p>{stats.beverageCount}</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{stats.orderCount}</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;