import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(
          "https://my-project-nsjg.onrender.com/api/v1/users/current-user",
          {
            withCredentials: true,
          }
        );

        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return authenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;