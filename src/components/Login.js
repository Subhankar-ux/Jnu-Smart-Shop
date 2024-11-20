import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth instead of AuthContext
import './Login.css';

const Login = () => {
  const { handleLogin } = useAuth(); // Use the useAuth hook to access handleLogin
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for handling errors
  const [loading, setLoading] = useState(false); // State for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading
    try {
      await handleLogin(email, password); // Call handleLogin from the context
    } catch (err) {
      setError('Invalid email or password. Please try again.'); // Display error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="login">
      <h2>Welcome Back!</h2>
      <p className="login-subtitle">Log in to access your account</p>
      
      {error && <div className="login-error">{error}</div>} {/* Error message */}
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            aria-label="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            aria-label="Password"
          />
        </div>

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
