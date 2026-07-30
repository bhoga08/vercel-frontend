import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import motivationalQuotes from "./quotes";
import Sidebar from '../pages/Sidebar';
import './dashboard.css';

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
      await axios.delete(`https://my-project-nsjg.onrender.com/api/v1/sessions/delete/${sessionId}`, {
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
      <Sidebar />

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