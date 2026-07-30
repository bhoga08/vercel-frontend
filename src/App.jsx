import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './Sidebar/Dashboard'; 
import Tracker from './Sidebar/Tracker';
import Goals from './Sidebar/Goals';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import AppHomePage from './Sidebar/AppHomePage';
import JavaTracker from './pages/JavaTracker';
import PythonTracker from './pages/pythontracker';
import Cpptracker from './pages/cpptracker';
import Profile from './Sidebar/Profile';
import Logout from './Sidebar/Logout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/app-home" element={<AppHomePage />} />
        <Route path= "/profile" element={<Profile />} />
        <Route path="/java-tracker" element={<JavaTracker />} />
       
        <Route path="/python-tracker" element={<PythonTracker />} />
        <Route path="/logout" element={<Logout />} />
         <Route path='/c++tracker' element={<cpptracker/>}/>
      </Routes>
    </Router>
  );
}

export default App;
