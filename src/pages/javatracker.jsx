// src/pages/JavaTracker.jsx
import React, { useState } from 'react';
import './javatracker.css';

const javaTopics = [
  { title: 'Introduction to Java', content: 'Overview, features, and setup of Java.' },
  { title: 'Hello World Program', content: 'Writing your first Java program.' },
  { title: 'Variables & Data Types', content: 'Primitive types, reference types, type casting.' },
  { title: 'Operators', content: 'Arithmetic, relational, logical, assignment, bitwise.' },
  { title: 'Control Flow Statements', content: 'if, if-else, switch-case, nested conditions.' },
  { title: 'Loops', content: 'for, while, do-while loops with examples.' },
  { title: 'Arrays', content: '1D and 2D arrays, array methods, enhanced for loop.' },
  { title: 'Strings', content: 'String class, StringBuilder, manipulation methods.' },
  { title: 'Methods', content: 'Defining and calling methods, overloading.' },
  { title: 'Recursion', content: 'Recursive functions and use cases.' },
  { title: 'OOP Concepts', content: 'Classes, objects, encapsulation, abstraction.' },
  { title: 'Constructors', content: 'Default, parameterized, constructor overloading.' },
  { title: 'Inheritance', content: 'Types, super keyword, method overriding.' },
  { title: 'Polymorphism', content: 'Compile-time and run-time polymorphism.' },
  { title: 'Abstraction', content: 'Abstract classes and interfaces.' },
  { title: 'Encapsulation', content: 'Private variables and public getters/setters.' },
  { title: 'Access Modifiers', content: 'private, public, protected, default.' },
  { title: 'Static Keyword', content: 'Static variables, methods, and blocks.' },
  { title: 'final Keyword', content: 'final variables, methods, and classes.' },
  { title: 'Packages', content: 'Creating and using packages, import statements.' },
  { title: 'Exception Handling', content: 'try, catch, finally, throw, throws.' },
  { title: 'Multithreading', content: 'Thread class, Runnable interface, synchronization.' },
  { title: 'File I/O', content: 'Reading and writing files using File, Scanner, BufferedReader.' },
  { title: 'Collections Framework', content: 'List, Set, Map, ArrayList, HashMap, HashSet.' },
  { title: 'Generics', content: 'Generic classes, methods, type safety.' },
  { title: 'Wrapper Classes', content: 'Integer, Float, Double, autoboxing, unboxing.' },
  { title: 'Enums', content: 'Creating and using enums in Java.' },
  { title: 'Java Annotations', content: 'Built-in and custom annotations.' },
  { title: 'Java Lambda Expressions', content: 'Functional interfaces and lambdas.' },
  { title: 'Java Streams', content: 'Stream API, map, filter, collect, reduce.' },
  { title: 'Java Date & Time API', content: 'LocalDate, LocalTime, LocalDateTime, formatting.' },
  { title: 'JDBC Basics', content: 'Connecting to databases using Java.' },
  { title: 'Java GUI (Swing)', content: 'JFrame, JPanel, buttons, layout managers.' },
  { title: 'Java Applets (Deprecated)', content: 'Old-style app development (for reference).' }
];

const JavaTracker = () => {
  const [completed, setCompleted] = useState({});

  const toggleComplete = (index) => {
    setCompleted((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="java-tracker">
      <h1>📘 Java Learning Tracker</h1>
      <p>Track your complete Java learning journey</p>

      <ul className="topic-list">
        {javaTopics.map((topic, index) => (
          <li key={index} className={completed[index] ? 'completed' : ''}>
            <div className="topic-header" onClick={() => toggleComplete(index)}>
              <input type="checkbox" checked={!!completed[index]} readOnly />
              <span>{topic.title}</span>
            </div>
            <div className="topic-content">{topic.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JavaTracker;
