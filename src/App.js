// src/App.js

// Import necessary modules from React and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components for different pages
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import AlbumPage from './components/AlbumPage';
import PhotoPage from './components/PhotoPage';

// Define the main App component
const App = () => {
  return (
    // Set up the Router to handle navigation
    <Router>
      <Routes>
        {/* Define routes for different paths and their corresponding components */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/photo" element={<PhotoPage />} />
      </Routes>
    </Router>
  );
};

// Export the App component as the default export
export default App;