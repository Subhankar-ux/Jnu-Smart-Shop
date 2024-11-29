import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';  // Import useAuth instead of AuthContext
import './Login.css';


const Login = () => {
  const { handleLogin } = useAuth();  // Use the useAuth hook to access handleLogin
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);  // Call handleLogin from the context
    } catch (err) {
      console.error(err);
    }
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
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;