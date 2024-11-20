import React, { createContext, useState, useContext, useEffect } from 'react'; // Import necessary hooks from React
import { login, logout } from '../services/authService'; // Import login and logout functions from authService
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [error, setError] = useState(null); // Error state for login failures
  const [loading, setLoading] = useState(true); // Loading state for initial authentication check
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Check authentication status on initial load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
    }
    setLoading(false); // Mark loading as complete
  }, []);

  // Handle Login
  const handleLogin = async (email, password) => {
    setError(null); // Clear previous errors
    try {
      const loggedInUser = await login(email, password); // Call login service
      setUser(loggedInUser); // Update user state
      localStorage.setItem('authToken', loggedInUser.token); // Save token in localStorage
      localStorage.setItem('user', JSON.stringify(loggedInUser)); // Save user data in localStorage
      navigate('/dashboard'); // Navigate to dashboard
    } catch (err) {
      setError('Invalid credentials. Please try again.'); // Set error message
      console.error(err);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    logout(); // Call logout service
    setUser(null); // Clear user state
    localStorage.removeItem('authToken'); // Remove token from localStorage
    localStorage.removeItem('user'); // Remove user data from localStorage
    navigate('/login'); // Navigate to login page
  };

  // Auth Context value
  const value = {
    user,
    error,
    loading,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only after loading is complete */}
    </AuthContext.Provider>
  );
};
