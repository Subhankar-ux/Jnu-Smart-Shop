import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import Auth Context

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Get user and loading state from Auth Context

  if (loading) {
    return <div>Loading...</div>; // Optionally display a loading indicator
  }

  return user ? children : <Navigate to="/Register" replace />; // Redirect if not authenticated
};

export default ProtectedRoute;
