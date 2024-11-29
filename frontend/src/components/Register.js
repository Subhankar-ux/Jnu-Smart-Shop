import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
import { register } from '../services/authService';  // Assuming you have this service to handle registration requests
import './Register.css';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setError('');

    // Form validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      // Attempt to register the user using the service
      const newUser = await register(name, email, password);
      // On successful registration, redirect to the home page or login page
      console.log('Registration Successful', newUser);
      navigate('/profile');

    } catch (error) {
      setError('Failed to register. Please try again.');
      console.error('Registration Error:', error);
    } finally {
      setIsSubmitting(false);
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
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>

      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
    </div>
  );
};

export default Register;