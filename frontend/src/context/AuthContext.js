import React, { createContext, useState, useContext, useEffect } from 'react';  // Import useState, useContext, useEffect from React
import { login, logout } from '../services/authService';  // Import functions from authService
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirecting
//import axios from "axios";

const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Define state at the top level
  const [error, setError] = useState(null);  // Define error state here as well
  const navigate = useNavigate();  // Initialize navigate for redirecting
  //const url = "http://localhost:4000";
  // Check if the user is authenticated by checking for token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const loggedInUser = await login(email, password);  // Use the login function from authService
      setUser(loggedInUser);  // Update the state with logged-in user data
      localStorage.setItem('user', JSON.stringify(loggedInUser));  // Optionally save user data in localStorage
      navigate('/profile');  // Redirect user to dashboard after login
    } catch (err) {
      setError('Login failed. Please try again.');  // Set error message in case of failure
      console.error(err);
    }
  };
  
  const handleLogout = () => {
    logout();  // Call logout function from authService
    setUser(null);  // Clear user data from state
    navigate('/login');  // Redirect user to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, error, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};