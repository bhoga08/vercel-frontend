import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./Sidebar/Dashboard";
import Tracker from "./Sidebar/Tracker";
import Goals from "./Sidebar/Goals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import AppHomePage from "./Sidebar/AppHomePage";
import JavaTracker from "./pages/javatracker";
import PythonTracker from "./pages/PythonTracker";
import Cpptracker from "./pages/cpptracker";
import Profile from "./Sidebar/Profile";
import Logout from "./Sidebar/Logout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Users from "./pages/Admin/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tracker"
          element={
            <ProtectedRoute>
              <Tracker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <Goals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app-home"
          element={
            <ProtectedRoute>
              <AppHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />{" "}
        <Route path="/java-tracker" element={<JavaTracker />} />
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />{" "}
        <Route path="/python-tracker" element={<PythonTracker />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/c++tracker" element={<cpptracker />} />
        <Route
          path="/admin/users"
          element={
            <AdminProtectedRoute>
              <Users />
            </AdminProtectedRoute>
          }
        />{" "}
      </Routes>
    </Router>
  );
}

export default App;
