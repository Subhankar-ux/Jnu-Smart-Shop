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
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {user.joinDate || 'N/A'}</p>
        <p><strong>Role:</strong> {user.role || 'User'}</p>
      </div>
      <div className="profile-actions">
        <a href="/edit-profile" className="btn-edit-profile">Edit Profile</a>
        <a href="/dashboard" className="btn-dashboard">Go to Dashboard</a>
      </div>
    </div>
  );
};

export default UserProfile;
