import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';

const Logout = () => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (!confirmed) return;

    localStorage.clear();

    const countdown = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1);

    return () => clearInterval(countdown);
  }, [confirmed, navigate]);

  return (
    <div className="logout-page">
      <div className="logout-container">
        {!confirmed ? (
          <div className="logout-box">
            <h1>Confirm Logout</h1>
            <p>Are you sure you want to logout from <strong>Learnix</strong>?</p>
            <div className="logout-actions">
              <button className="confirm-btn" onClick={() => setConfirmed(true)}>Yes, Logout</button>
              <button className="cancel-btn" onClick={() => navigate('/dashboard')}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="logout-box">
            <h1 className="pulse">You've Been Logged Out</h1>
            <p>Thank you for using <strong>Learnix</strong>.</p>
            <div className="spinner-container">
              <div className="spinner">
                <div className="spinner-dot"></div>
              </div>
            </div>
            <p className="countdown">Redirecting in <strong>{seconds}</strong> second{seconds !== 1 && 's'}...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;
