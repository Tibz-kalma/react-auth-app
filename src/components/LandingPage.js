// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to the Photo App</h1>
      <p className="landing-description">Your one-stop solution for managing and sharing your photos.</p>
      <Link to="/login" className="landing-button">Login</Link>
    </div>
  );
};

export default LandingPage;