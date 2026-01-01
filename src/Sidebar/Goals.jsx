import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './goals.css';
import './sidebar.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Goals = () => {
  const navigate = useNavigate();
  const [goalsList, setGoalsList] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const res = await axios.get('http://localhost:5005/api/v1/goals', {
        withCredentials: true
      });
      setGoalsList(res.data);
    } catch (error) {
      if (error.response?.status === 401) {
        alert("You are not logged in");
        navigate('/login');
      } else {
        console.error("Error fetching goals:", error?.response?.data || error.message);
      }
    }
  };

  const addGoal = async () => {
    if (!newGoal.trim()) return toast.warn("Please enter a goal");

    try {
      const res = await axios.post(
        "http://localhost:5005/api/v1/goals/create",
        { title: newGoal },
        { withCredentials: true }
      );
      setGoalsList([...goalsList, res.data]);
      setNewGoal('');
      toast.success("🎯 Goal added successfully!");
    } catch (error) {
      console.error("Error adding goal:", error?.response?.data || error.message);
      toast.error("Failed to add goal");
    }
  };

  const toggleStatus = async (index) => {
    const goal = goalsList[index];
    const newStatus = goal.status === 'complete' ? 'incomplete' : 'complete';

    try {
      await axios.put(
        `http://localhost:5005/api/v1/goals/update/${goal._id}`,
        { status: newStatus },
        { withCredentials: true }
      );
      const updatedGoals = [...goalsList];
      updatedGoals[index].status = newStatus;
      setGoalsList(updatedGoals);
    } catch (error) {
      console.error("Error updating goal:", error?.response?.data || error.message);
    }
  };

  const removeGoal = async (index) => {
    const goal = goalsList[index];
    try {
      await axios.delete(`http://localhost:5005/api/v1/goals/delete/${goal._id}`, {
        withCredentials: true
      });
      const updatedGoals = goalsList.filter((_, i) => i !== index);
      setGoalsList(updatedGoals);
      toast.info("🗑️ Goal deleted successfully!");
    } catch (error) {
      console.error("Error deleting goal:", error?.response?.data || error.message);
      toast.error("Failed to delete goal");
    }
  };

  const completed = goalsList.filter(goal => goal.status === 'complete').length;
  const total = goalsList.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="page-container">
      <ToastContainer position="top-right" autoClose={2000} />
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>📘 Learnix</h2>
        <nav>
          <ul>
            <li onClick={() => navigate('/app-home')}><span>🏠</span> Home</li>
            <li onClick={() => navigate('/dashboard')}><span>📊</span> Dashboard</li>
            <li onClick={() => navigate('/tracker')}><span>📘</span> Tracker</li>
            <li className="active"><span>🎯</span> Goals</li>
            <li onClick={() => navigate('/logout')}><span>🚪</span> Logout</li>
          </ul>
        </nav>
      </div>

      {/* Main Goals Section */}
      <div className="goals-container">
        <h1>🎯 Weekly Study Goals</h1>

        <div className="progress-box">
          <p>Progress: <strong>{completed}</strong> / {total} ({percent}%)</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${percent}%` }}></div>
          </div>
        </div>

        <div className="add-goal">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addGoal()}
            placeholder="Enter your new goal..."
          />
          <button onClick={addGoal}>➕ Add Goal</button>
        </div>

        <div className="goals-list">
          {goalsList.map((goal, index) => (
            <div key={goal._id} className={`goal-card ${goal.status}`}>
              <div className="goal-header">
                <h3>{goal.title}</h3>
                <span className={`badge ${goal.status === 'complete' ? 'done' : 'progress'}`}>
                  {goal.status === 'complete' ? "✔ Done" : "⏳ In Progress"}
                </span>
              </div>
              <div className="goal-meta">
                <span>⏱ {new Date(goal.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="goal-actions">
                <button onClick={() => toggleStatus(index)}>
                  {goal.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button className="modern-delete-btn" onClick={() => removeGoal(index)}>🗑</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
