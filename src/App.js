// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { AuthProvider } from './context/AuthContext';  // Correct import
import './index.css';  // Global styles


function App() {
  return (
    
    <AuthProvider>
       <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/productList" element={<ProductList/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/order-tracking" element={<OrderTracking/>} />
            <Route path="/profile" element={<UserProfile/>} />
          </Routes>
        </div>
        
    </AuthProvider>
  );
}

export default App;