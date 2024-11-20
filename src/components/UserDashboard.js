import React from 'react';
import { useAuth } from '../context/AuthContext'; // Hook for user authentication context
import './UserDashboard.css';

const UserDashboard = () => {
  const { user } = useAuth(); // Access user details from context

  if (!user) {
    return <div>Please log in to access your dashboard.</div>; // Redirect if not logged in
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {user.name}!</h2>
        <p>Your personalized dashboard awaits.</p>
      </header>

      <section className="dashboard-content">
        <div className="dashboard-section">
          <h3>Your Details</h3>
          <ul>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Membership:</strong> {user.membership || 'Free User'}</li>
            <li><strong>Joined:</strong> {new Date(user.joinedDate).toDateString()}</li>
          </ul>
        </div>

        <div className="dashboard-section">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <a href="/ProductList" className="btn">Shop Now</a>
            <a href="/cart" className="btn">View Cart</a>
            <a href="/profile" className="btn">Edit Profile</a>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Recent Activity</h3>
          <p>No recent activities to show. Start exploring our products!</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
