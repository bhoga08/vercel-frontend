import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // ✅ status message
  const [messageType, setMessageType] = useState(""); // ✅ 'success' or 'error'
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { identifier, password } = formData;

    if (!identifier.trim() || !password.trim()) {
      setMessageType("error");
      setMessage("Please enter your username or mobile number, and password.");
      return;
    }

    const isMobile = /^\d{10,15}$/.test(identifier.trim());
    const payload = {
      password: password.trim(),
      ...(isMobile
        ? { mobileNumber: identifier.trim() }
        : { username: identifier.trim() }),
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "https://my-project-nsjg.onrender.com/api/v1/users/login",
        payload,
        { withCredentials: true },
      );
      console.log(response.data);

      const { user } = response.data.data;
      const { success } = response.data;
      console.log(response.data.data.user);

      if (success && user) {
        setMessageType("success");
        setMessage("✅ Logged in successfully! Redirecting...");
        setTimeout(() => {
          if (user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/app-home");
          }
        }, 1500);
      } else {
        setMessageType("error");
        setMessage("Login failed. Try again.");
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Login failed. Check credentials.";
      setMessageType("error");
      setMessage(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={onSubmit}>
        <h1 className="login-heading">
          Log in to <span className="highlight">Learnix</span>
        </h1>
        <p className="login-subtext">
          Track your learning journey like a pro 🚀
        </p>

        {/* ✅ Show message */}
        {message && (
          <div className={`login-message ${messageType}`}>{message}</div>
        )}

        <label>Username or Mobile Number</label>
        <input
          type="text"
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
          placeholder="Enter username or mobile number"
          className="login-input"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="login-input"
          required
        />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="login-footer-text">
          Don’t have an account?{" "}
          <Link to="/register" className="login-link">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
