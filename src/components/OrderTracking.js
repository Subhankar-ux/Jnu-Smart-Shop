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
  );
};

export default OrderTracking;