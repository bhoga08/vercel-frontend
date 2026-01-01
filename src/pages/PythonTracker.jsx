import React, { useState, useEffect } from 'react';
import './JavaTracker.css'; // Reusing same CSS theme

const pythonTopics = [
  'Introduction to Python',
  'Variables and Data Types',
  'Operators',
  'Control Flow (if, elif, else)',
  'Loops (for, while)',
  'Functions and Arguments',
  'Lists, Tuples, Sets, Dictionaries',
  'String Manipulation',
  'File Handling',
  'Exception Handling',
  'Modules and Packages',
  'Object-Oriented Programming',
  'Inheritance and Polymorphism',
  'Lambda, Map, Filter, Reduce',
  'Decorators',
  'List Comprehension',
  'Working with JSON',
  'Python Libraries (NumPy, Pandas)',
  'Virtual Environments & pip',
  'Basics of Flask / Django',
];

const PythonTracker = () => {
  const [completed, setCompleted] = useState([]);

  const toggleTopic = (topic) => {
    setCompleted((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  useEffect(() => {
    document.title = "Python Tracker | Learnix";
  }, []);

  return (
    <div className="java-tracker">
      <h1>🐍 Python Learning Tracker</h1>
      <p>Mark the topics you’ve completed while learning Python</p>

      <ul className="topic-list">
        {pythonTopics.map((topic, index) => (
          <li
            key={index}
            className={`topic-item ${completed.includes(topic) ? 'checked' : ''}`}
            onClick={() => toggleTopic(topic)}
          >
            <input
              type="checkbox"
              checked={completed.includes(topic)}
              onChange={() => toggleTopic(topic)}
            />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PythonTracker;
