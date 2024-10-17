import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  test('renders LandingPage component for / route', () => {
    window.history.pushState({}, 'Landing Page', '/');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Landing Page/i)).toBeInTheDocument();
  });

  test('renders LoginPage component for /login route', () => {
    window.history.pushState({}, 'Login Page', '/login');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });

  test('renders HomePage component for /home route', () => {
    window.history.pushState({}, 'Home Page', '/home');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  test('renders UserPage component for /user route', () => {
    window.history.pushState({}, 'User Page', '/user');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/User Page/i)).toBeInTheDocument();
  });

  test('renders AlbumPage component for /album route', () => {
    window.history.pushState({}, 'Album Page', '/album');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Album Page/i)).toBeInTheDocument();
  });

  test('renders PhotoPage component for /photo route', () => {
    window.history.pushState({}, 'Photo Page', '/photo');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Photo Page/i)).toBeInTheDocument();
  });

  test('renders 404 for unknown route', () => {
    window.history.pushState({}, 'Unknown Page', '/unknown');
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});