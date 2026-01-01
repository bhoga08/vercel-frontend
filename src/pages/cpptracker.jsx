import React, { useState, useEffect } from 'react';
import './JavaTracker.css'; // Reuse same CSS

const cppTopics = [
  'Introduction to C++',
  'Variables and Data Types',
  'Operators and Expressions',
  'Control Flow (if, switch)',
  'Loops (for, while, do-while)',
  'Functions and Scope',
  'Arrays and Strings',
  'Pointers',
  'Structures and Unions',
  'Object-Oriented Programming',
  'Classes and Objects',
  'Constructors and Destructors',
  'Inheritance',
  'Polymorphism',
  'File Handling in C++',
  'Exception Handling',
  'Templates (Function & Class)',
  'STL Basics (Vectors, Maps)',
  'Dynamic Memory Allocation',
  'Advanced Topics & Projects',
];

const CppTracker = () => {
  const [completed, setCompleted] = useState([]);

  const toggleTopic = (topic) => {
    setCompleted((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  useEffect(() => {
    document.title = "C++ Tracker | Learnix";
  }, []);

  return (
    <div className="java-tracker">
      <h1>💻 C++ Learning Tracker</h1>
      <p>Mark the topics you’ve completed while learning C++</p>

      <ul className="topic-list">
        {cppTopics.map((topic, index) => (
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

export default CppTracker;
