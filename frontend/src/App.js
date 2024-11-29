import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import OrderTracking from './components/OrderTracking';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext'; // Correct import
import './index.css'; // Global styles

function App() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <AuthProvider>
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Home cart={cart} />} />
          <Route path="/productList" element={<ProductList cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;