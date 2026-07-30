import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import motivationalQuotes from "./quotes";
import './dashboard.css';
import './sidebar.css';

const Dashboard = () => {
  const [learningData, setLearningData] = useState([]);
  const [motivation, setMotivation] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchLearning();

    const setRandomQuote = () => {
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setMotivation(randomQuote);
    }

    setRandomQuote();
    const interval = setInterval(setRandomQuote, 30000); // 30 sec
    return () => clearInterval(interval);
  }, []);

  const fetchLearning = async () => {
    try {
      const res = await axios.get("https://my-project-nsjg.onrender.com/api/v1/sessions", {
        withCredentials: true
      });
      setLearningData(res.data || []);
    } catch (err) {
      console.error('Error fetching learning data:', err);
    }
  };

  const handleDelete = async (sessionId) => {
    try {
      await axios.delete(`http://localhost:5005/api/v1/sessions/delete/${sessionId}`, {
        withCredentials: true
      });
      setLearningData(prev => prev.filter(session => session._id !== sessionId));
    } catch (err) {
      console.error('Error deleting session:', err);
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

      {/* Main Dashboard */}
      <div className="dashboard-container">
        <h1>🚀 Your Learnix Dashboard</h1>
        <p>Track your language learning journey!</p>

        {/* Daily Motivation */}
        <div className="motivation-box">
          <h3>🌟 Daily Thought</h3>
          <p>"{motivation}"</p>
        </div>

        {/* Learning Cards */}
        <div className="learning-cards">
          {learningData.length === 0 ? (
            <p>No sessions added yet. Start tracking now!</p>
          ) : (
            learningData.map((session, idx) => (
              <div className="lang-card" key={session._id || idx}>
                <h3>{session.programmingLanguage || session.language}</h3>
                <p>🧠 Topic: {session.topic}</p>
                <p>⏱ Duration: {session.duration}</p>
                <button onClick={() => navigate(`/${(session.programmingLanguage || session.language).toLowerCase()}-tracker`)}>
                  Continue {session.programmingLanguage || session.language}
                </button>
                <button className="delete-btn" onClick={() => handleDelete(session._id)}>
                  🗑 Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;