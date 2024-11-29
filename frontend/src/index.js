import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the updated import for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();