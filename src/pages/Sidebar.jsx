import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaChartLine,
  FaBook,
  FaBullseye,
  FaSignOutAlt,
} from "react-icons/fa";

import "../Sidebar/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const menus = [
    {
      title: "Home",
      icon: <FaHome />,
      path: "/app-home",
    },
    {
      title: "Dashboard",
      icon: <FaChartLine />,
      path: "/dashboard",
    },
    {
      title: "Tracker",
      icon: <FaBook />,
      path: "/tracker",
    },
    {
      title: "Goals",
      icon: <FaBullseye />,
      path: "/goals",
    },
  ];

  return (
    <>
      {/* Hamburger */}

      <button className="menu-btn" onClick={() => setOpen(true)}>
        <FaBars />
      </button>

      {/* Overlay */}

      <div
        className={`overlay ${open ? "show-overlay" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}

      <aside className={`sidebar ${open ? "show-sidebar" : ""}`}>

        <div className="sidebar-top">
          <h2>Learnix</h2>

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <ul>

          {menus.map((item) => (
            <li
              key={item.path}
              className={
                location.pathname === item.path ? "active" : ""
              }
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
            >
              {item.icon}

              <span>{item.title}</span>
            </li>
          ))}

          <li
            onClick={() => {
              navigate("/logout");
              setOpen(false);
            }}
          >
            <FaSignOutAlt />

            <span>Logout</span>
          </li>

        </ul>
      </aside>
    </>
  );
};

export default Sidebar;