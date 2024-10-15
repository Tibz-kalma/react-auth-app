// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import AlbumPage from './components/AlbumPage';
import PhotoPage from './components/PhotoPage';

const App = () => {
  return (
    <Router>
      <Routes>
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

export default App;