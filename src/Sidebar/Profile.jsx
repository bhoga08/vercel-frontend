// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './profile.css';
import './sidebar.css'; // Make sure sidebar styles are applied

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    mobile: '',
    avatar: ''
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5005/api/user/profile')
      .then(res => setProfile(res.data))
      .catch(err => console.error('Error loading profile:', err));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('email', profile.email);
    formData.append('mobile', profile.mobile);
    if (file) formData.append('avatar', file);

    try {
      await axios.put('http://localhost:5005/api/user/profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Profile updated!');
    } catch (err) {
      console.error(err);
      alert('Error updating profile');
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate('/');
    }
  };

  return (
    <div className="page-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>📘 Learnix</h2>
        <nav>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''} onClick={() => navigate('/app-home')}>
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
            <li className={location.pathname === '/profile' ? 'active' : ''} onClick={() => navigate('/profile')}>
              <span>👤</span> Profile
            </li>
            <li onClick={handleLogout}>
              <span>🚪</span> Logout
            </li>
          </ul>
        </nav>
      </div>

      {/* Profile Content */}
      <div className="goals-container">
        <h1>👤 Your Profile</h1>

        <div className="profile-pic-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : profile.avatar || '/default-avatar.png'}
            alt="Profile"
            className="profile-pic"
          />
          <input type="file" onChange={handleFileChange} />
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <label>Name</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} required />

          <label>Mobile</label>
          <input type="text" name="mobile" value={profile.mobile} onChange={handleChange} required />

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
