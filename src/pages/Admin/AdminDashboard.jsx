import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
  totalUsers: 0,
  totalSessions: 0,
  totalGoals: 0,
  activeUsers: 0,
});
const fetchDashboard = async () => {
  try {
    const res = await axios.get(
"https://my-project-nsjg.onrender.com/api/admin/dashboard"
    );

    console.log(res.data); // 👈 Add this

    setStats(res.data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchDashboard();
}, []);
  return (
    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-dashboard">

        <AdminNavbar />

        <h1>Admin Dashboard</h1>

        <div className="stats-container">
          <div className="stat-card">
            <h2>Total Users</h2>
            <p>{stats.totalUsers}</p>
          </div>

          <div className="stat-card">
            <h2>Total Sessions</h2>
            <p>{stats.totalSessions}</p>
          </div>

          <div className="stat-card">
            <p>{stats.totalGoals}</p>
            <p>0</p>
          </div>

          <div className="stat-card">
            <h2>Active Users</h2>
           <p>{stats.activeUsers}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;