import React, { useState } from 'react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleTrackOrder = () => {
    // In a real-world app, you'd query the backend to get the order status
    setOrderStatus('Shipped'); // Example response
  };

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

    <div>
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleTrackOrder}>Track Order</button>

      {orderStatus && <p>Order Status: {orderStatus}</p>}
    </div>
    </div>
  );
};

export default OrderTracking;