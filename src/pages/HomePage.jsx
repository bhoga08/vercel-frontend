import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title slide-in-top">
        Welcome to <span className="highlight">Learnix</span>
      </h1>

      <p className="homepage-subtitle fade-in">
        Your personal learning tracker. Plan your journey, track your topics, and stay motivated.
      </p>

      <div className="button-group fade-in-delayed">
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-btn">Register</button>
        </Link>
        <Link to="/contact">
          <button className="home-btn">Contact</button>
        </Link>
      </div>

      <div className="features-container">
        <div className="feature-box fade-up">
          <h3>📚 Track Topics</h3>
          <p>
            Mark topics as completed or pending to stay on top of your learning schedule.
          </p>
        </div>

        <div className="feature-box fade-up">
          <h3>📈 Progress Charts</h3>
          <p>
            Visualize your learning progress with clean and simple graphs.
          </p>
        </div>

        <div className="feature-box fade-up">
          <h3>⏱️ Daily Goals</h3>
          <p>
            Set daily learning goals and monitor your consistency streak.
          </p>
        </div>
      </div>

      <footer className="homepage-footer fade-in-delayed">
        © 2025 Learnix – Learn Smarter, Not Harder
      </footer>
    </div>
  );
};

export default HomePage;
