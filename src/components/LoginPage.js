// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../Config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import './LoginPage.css';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken(); // Get the token
      localStorage.setItem('authToken', token); // Store the token in localStorage
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      {error && <p className="login-error">{error}</p>}
      <button onClick={handleLogin} className="login-button">Login with Google</button>
    </div>
  );
};

export default LoginPage;