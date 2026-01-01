// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    navigate('/');
  };

  return (
    <div className="contact-wrapper">
      <form className="contact-card" onSubmit={handleSubmit}>
        <h2 className="contact-heading">
          Get in <span className="highlight">Touch</span>
        </h2>
        <p className="contact-subtext">
          We'd love to hear from you!
        </p>

        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="contact-input"
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className="contact-button" type="submit">
          Send Message
        </button>

        <p className="contact-footer-text">
          Back to <span className="contact-link" onClick={() => navigate('/')}>Home</span>
        </p>
      </form>
    </div>
  );
};

export default Contact;
