import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AdminProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(
          "https://my-project-nsjg.onrender.com/api/v1/users/current-user",
          {
            withCredentials: true,
          }
        );

        if (res.data.data.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return isAdmin ? children : <Navigate to="/app-home" replace />;
};

export default AdminProtectedRoute;
