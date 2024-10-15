import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Photo.css';

const PhotoPage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <div className="nav-buttons">
        <Link to="/home" className="nav-button">Home</Link>
        <Link to="/user" className="nav-button">User Profile</Link>
        <Link to="/album" className="nav-button">Album</Link>
      </div>
      <h1 className="photo-title">Photos</h1>
      <div className="photo-list">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} className="photo-image" />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;