import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiBook,
  FiTarget,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">

      <div className="logo">
        <h2>Learnix</h2>
        <p>Admin Panel</p>
      </div>

      <nav>

        <NavLink to="/admin" end className="admin-link">
          <FiHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/users" className="admin-link">
          <FiUsers />
          <span>Users</span>
        </NavLink>

        <NavLink to="/admin/sessions" className="admin-link">
          <FiBook />
          <span>Sessions</span>
        </NavLink>

        <NavLink to="/admin/goals" className="admin-link">
          <FiTarget />
          <span>Goals</span>
        </NavLink>

        <NavLink to="/admin/analytics" className="admin-link">
          <FiBarChart2 />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/admin/settings" className="admin-link">
          <FiSettings />
          <span>Settings</span>
        </NavLink>

      </nav>

      <NavLink to="/" className="admin-link logout">
        <FiLogOut />
        <span>Logout</span>
      </NavLink>

    </aside>
  );
};

export default AdminSidebar;