import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AlbumPage.css';

const AlbumPage = () => {
  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="nav-buttons">
        <Link to="/home" className="nav-button">Home</Link>
        <Link to="/user" className="nav-button">User Profile</Link>
        <Link to="/photo" className="nav-button">Photos</Link>
      </div>
      <h1 className="album-title">Albums</h1>
      <input
        type="text"
        placeholder="Search albums..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-box"
      />
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