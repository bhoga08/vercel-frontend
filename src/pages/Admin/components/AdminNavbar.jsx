import React from "react";
import {
  FiSearch,
  FiBell,
  FiUser,
  FiMoon
} from "react-icons/fi";

import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <header className="admin-navbar">

      <div className="search-box">
        <FiSearch />
        <input
          type="text"
          placeholder="Search users, sessions..."
        />
      </div>

      <div className="navbar-right">

        <button className="icon-btn">
          <FiMoon />
        </button>

        <button className="icon-btn">
          <FiBell />
        </button>

        <div className="admin-profile">
          <FiUser />
          <div>
            <h4>Admin</h4>
            <p>Administrator</p>
          </div>
        </div>

      </div>

    </header>
  );
};

export default AdminNavbar;