// src/components/AlbumPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AlbumPage.css';

/**
 * AlbumPage Component
 * 
 * This component fetches and displays a list of albums. It includes a search
 * functionality to filter albums by title.
 */
const AlbumPage = () => {
  // State to store the list of albums
  const [albums, setAlbums] = useState([]);
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Fetch albums from the API when the component mounts.
   */
  useEffect(() => {
    const fetchAlbums = async () => {
      const token = 'YOUR_AUTH_TOKEN'; // Replace with your actual token

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  /**
   * Handle changes in the search input.
   * 
   * @param {Object} e - The event object from the input change.
   */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter albums based on the search query
  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Navigation buttons */}
      <div className="nav-buttons">
        <Link to="/home" className="nav-button">Home</Link>
        <Link to="/user" className="nav-button">User Profile</Link>
        <Link to="/photo" className="nav-button">Photos</Link>
      </div>

      {/* Page title */}
      <h1 className="album-title">Albums</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search albums..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-box"
      />

      {/* List of filtered albums */}
      <div className="album-list">
        {filteredAlbums.map(album => (
          <div key={album.id} className="album-item">
            <h3 className="album-title">{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;