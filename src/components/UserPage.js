import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';
import './User.css'; // Ensure this is the correct path to your User.css

/**
 * UserPage component displays the user's profile and their posts.
 */
const UserPage = () => {
  const [user, setUser] = useState(null); // State to store the authenticated user
  const [posts, setPosts] = useState([]); // State to store the user's posts
  const navigate = useNavigate(); // Hook to navigate programmatically

  // useEffect hook to handle authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set the authenticated user
        fetchPosts(); // Fetch the user's posts
      } else {
        navigate('/login'); // Redirect to login page if not authenticated
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [navigate]);

  /**
   * Fetches the user's posts from an API.
   */
  const fetchPosts = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
          'Authorization': `Bearer ${token}` // Include the token in the request headers
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data); // Set the fetched posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Render null or a loading spinner if the user is not authenticated
  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="nav-buttons">
        <Link to="/home" className="nav-button">Home</Link>
        <Link to="/album" className="nav-button">Album</Link>
        <Link to="/photo" className="nav-button">Photos</Link>
      </div>
      <h1 className="user-title">User Profile</h1>
      <p className="user-info">UID: {user.uid}</p>
      <div className="posts-container">
        <h2 className="posts-title">Posts</h2>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;