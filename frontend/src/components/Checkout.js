import React, { useState } from 'react';
import './checkout.css';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate order placement
    setTimeout(() => {
      console.log('Order submitted:', { shippingAddress, paymentMethod });
      // Redirect to order confirmation or tracking
      setIsProcessing(false);
      alert('Order placed successfully!');
    }, 2000);
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
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
        />
        <select onChange={(e) => setPaymentMethod(e.target.value)} required>
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paytm">Paytm</option>
          <option value="cash">Cash On Delivery</option>
        </select>
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Checkout;