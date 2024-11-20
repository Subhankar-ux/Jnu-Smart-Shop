import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>JNU Smart Shop Dashboard</h1>
      </header>

      <div className="dashboard-content">
        {/* Summary Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Products</h3>
            <p>28</p>
          </div>
          <div className="card">
            <h3>Orders Today</h3>
            <p>56</p>
          </div>
          <div className="card">
            <h3>Total Revenue</h3>
            <p>₹1,20,000</p>
          </div>
          <div className="card">
            <h3>Users</h3>
            <p>240</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity">
          <h2>Recent Orders</h2>
          <table className="activity-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1001</td>
                <td>Aryan Singh</td>
                <td>JNU Hoodie</td>
                <td>Shipped</td>
                <td>₹1,199</td>
              </tr>
              <tr>
                <td>#1002</td>
                <td>Riya Gupta</td>
                <td>Yoga Mat</td>
                <td>Pending</td>
                <td>₹799</td>
              </tr>
              <tr>
                <td>#1003</td>
                <td>Aditya Sharma</td>
                <td>Mug</td>
                <td>Delivered</td>
                <td>₹349</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Analytics Section */}
        <div className="analytics-section">
          <h2>Sales Analytics</h2>
          <p>Placeholder for charts or graphs (e.g., bar chart, pie chart).</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
