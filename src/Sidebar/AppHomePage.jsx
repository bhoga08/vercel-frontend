import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppHomePage.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to <span className="brand">Learnix</span></h1>
        <p className="tagline">
          Your personalized dashboard to track learning, set study goals, and grow smarter — every day.
        </p>
        <button className="cta-btn" onClick={() => navigate('/dashboard')}>
          🚀 Start Your Journey
        </button>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Learnix?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>📅 Smart Tracking</h3>
            <p>Monitor daily and weekly sessions with ease and clarity.</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Goal Setting</h3>
            <p>Define clear goals and stay on target with personalized objectives.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Visual Insights</h3>
            <p>Gain insights through an interactive dashboard and performance analytics.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Curated Resources</h3>
            <p>Access handpicked learning websites to keep you ahead.</p>
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="resources-section">
        <h2>Top Learning Resources</h2>
        <p>Sharpen your skills with these platforms:</p>
        <ul className="resource-links">
          <li><a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">🌐 W3Schools</a></li>
          <li><a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">💻 freeCodeCamp</a></li>
          <li><a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer">📘 GeeksforGeeks</a></li>
          <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">🧠 MDN Web Docs</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Learnix. Empowering learners one session at a time.</p>
      </footer>
    </div>
  );
};

export default Home;
