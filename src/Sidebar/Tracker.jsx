import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import './tracker.css';
import './sidebar.css';

const Tracker = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    programmingLanguage: '',
    topic: '',
    duration: '',
  });

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate('/');
    }
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5005/api/v1/sessions/create",
        formData,
        {
          withCredentials: true // ✅ Sends the auth cookie (JWT)
        }
      );

      alert("✅ Session saved successfully!");
      setFormData({ programmingLanguage: '', topic: '', duration: '' });
      navigate('/dashboard');
    } catch (error) {
      console.error("Error saving session:", error.response?.data || error.message);
      alert("❌ Failed to save session.");
    }
  };

  return (
    <div className="page-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>📘 Learnix</h2>
        <nav>
          <ul>
            <li className={location.pathname === '/app-home' ? 'active' : ''} onClick={() => navigate('/app-home')}>
              <span>🏠</span> Home
            </li>
            <li className={location.pathname === '/dashboard' ? 'active' : ''} onClick={() => navigate('/dashboard')}>
              <span>📊</span> Dashboard
            </li>
            <li className={location.pathname === '/tracker' ? 'active' : ''} onClick={() => navigate('/tracker')}>
              <span>📘</span> Tracker
            </li>
            <li className={location.pathname === '/goals' ? 'active' : ''} onClick={() => navigate('/goals')}>
              <span>🎯</span> Goals
            </li>
            <li onClick={() => navigate('/logout')}>
              <span>🚪</span> Logout
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="tracker-container">
        <h1 className="animated-heading">🧠 Track Your Study Session</h1>
        <form onSubmit={handleSubmit} className="tracker-form">
          <div className="form-group">
            <label>Programming Language</label>
            <select
              name="programmingLanguage"
              value={formData.programmingLanguage}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="C++">C++</option>
            </select>
          </div>

          <div className="form-group">
            <label>Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="E.g. Loops, OOP, Arrays"
              required
            />
          </div>

          <div className="form-group">
            <label>Duration (in minutes)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="E.g. 45"
              min="1"
              required
            />
          </div>

          <button type="submit" className="submit-btn">💾 Save Session</button>
        </form>
      </div>
    </div>
  );
};

export default Tracker;