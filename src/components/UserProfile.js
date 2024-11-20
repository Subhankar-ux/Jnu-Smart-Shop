import React from 'react';
import { useAuth } from '../context/AuthContext';  // Import useAuth instead of AuthContext
import './UserProfile.css';

const UserProfile = () => {
  const { user } = useAuth();  // Use the useAuth hook to access the user data

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
