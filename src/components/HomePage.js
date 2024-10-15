// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';
import './HomePage.css';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome, {user.email}</h1>
      <p className="home-description">This is your home page. You are authenticated!</p>
      <div className="nav-buttons">
        <Link to="/user" className="nav-button">User Profile</Link>
        <Link to="/album" className="nav-button">Albums</Link>
        <Link to="/photo" className="nav-button">Photos</Link>
      </div>
    </div>
  );
};

export default HomePage;