import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './Sidebar/Dashboard'; 
import Tracker from './Sidebar/Tracker';
import Goals from './Sidebar/Goals';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import AppHomePage from './Sidebar/AppHomePage';
import JavaTracker from './pages/javatracker';
import PythonTracker from './pages/PythonTracker';
import Cpptracker from './pages/cpptracker';
import Profile from './Sidebar/Profile';
import Logout from './Sidebar/Logout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Users from './pages/Admin/Users';
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
       <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/python-tracker" element={<PythonTracker />} />
        <Route path="/logout" element={<Logout />} />
         <Route path='/c++tracker' element={<cpptracker/>}/>
         <Route 
 path="/admin/users" 
 element={<Users/>}
/>
      </Routes>
    </Router>
  );
}

export default App;
