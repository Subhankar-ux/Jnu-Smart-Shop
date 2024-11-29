import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth instead of AuthContext
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useAuth(); // Use the useAuth hook to access the user data

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Access Denied</h2>
        <p>Please <a href="/login">log in</a> to view your profile.</p>
      </div>
    );
  }

  return (
    <div>
       <header className="header">
        <nav className="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ProductList">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li> <a href="/register" className="register-link">Register</a></li>
          </ul>
        </nav>
      </header>
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> Vivek Roy</p>
        <p><strong>Email:</strong> vivek2024@gmail.com</p>
        <p><strong>Joined:</strong>15-11-2024</p>                         
        <p><strong>Role:</strong> {user.role || 'User'}</p>
      </div>
      <div className="profile-actions">
        <a href="/edit-profile" className="btn-edit-profile">Edit Profile</a>
        <a href="/dashboard" className="btn-dashboard">Go to Dashboard</a>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;