import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:5005/api/v1/users/register', {
        username: formData.username,
        mobileNumber: formData.mobileNumber,
        password: formData.password,
      });

      alert(response.data.message || 'Registered successfully!');
      setFormData({
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-card" onSubmit={onSubmit}>
        <h1 className="register-heading">Create your <span className="highlight">Learnix</span> Account</h1>
        <p className="register-subtext">Join now and track your learning journey 🚀</p>

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          className="register-input"
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter 10-digit mobile number"
          className="register-input"
        />
        {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="register-input"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          className="register-input"
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit" className="register-button">Register</button>

        <div className="register-footer-text">
          Already have an account? <a href="/login" className="register-link">Login here</a>
        </div>
      </form>
    </div>
  );
};

export default Register;