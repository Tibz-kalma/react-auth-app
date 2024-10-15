import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';
import './User.css';

const UserPage = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchUser();
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="nav-buttons">
        <Link to="/home" className="nav-button">Home</Link>
        <Link to="/album" className="nav-button">Album</Link>
        <Link to="/photo" className="nav-button">Photos</Link>
      </div>
      <h1 className="user-title">User Profile</h1>
      <p className="user-info">Email: {user.email}</p>
      <p className="user-info">UID: {user.id}</p>
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