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