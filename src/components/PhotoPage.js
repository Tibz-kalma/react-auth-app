import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';
import './Photo.css'; // Ensure this is the correct path to your Photo.css

const PhotoPage = () => {
  const [photos, setPhotos] = useState([]); // State to store the list of photos
  const [user, setUser] = useState(null); // State to store the authenticated user
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set the user state if authenticated
        fetchPhotos(); // Fetch photos if the user is authenticated
      } else {
        navigate('/login'); // Redirect to login page if not authenticated
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [navigate]);

  // Function to fetch photos from the API
  const fetchPhotos = async () => {
    const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
        headers: {
          'Authorization': `Bearer ${token}` // Include the token in the request headers
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Throw an error if the response is not ok
      }
      const data = await response.json(); // Parse the JSON response
      setPhotos(data); // Update the photos state with the fetched data
    } catch (error) {
      console.error('Error fetching photos:', error); // Log any errors that occur during the fetch
    }
  };

  // If the user is not authenticated, return null (or a loading spinner)
  if (!user) {
    return null;
  }

  return (
    <div>
      {/* Navigation buttons */}
      <div className="nav-buttons">
        <Link to="/home" className="nav-button">Home</Link>
        <Link to="/user" className="nav-button">User Profile</Link>
        <Link to="/album" className="nav-button">Album</Link>
      </div>
      <h1 className="photo-title">Photos</h1>
      <div className="photo-list">
        {/* Render the list of photos */}
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;