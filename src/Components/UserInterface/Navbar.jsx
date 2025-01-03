import React from 'react';
import './Navbar.css';
import SearchBar from './Nav Components/SearchBar';
import LocationInput from './Nav Components/LocationInput';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid od">
        {/* Sidebar Toggle Button */}
        <button 
          className="btn toggle-btn btn-outline-secondary me-3" 
          onClick={toggleSidebar}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Navbar Brand */}
        <a className="navbar-brand" href="/">Garage@24</a>

        {/* Search and Location */}
        <div className="collapse navbar-collapse justify-content-end">
          <form className="d-flex align-items-center">
            <LocationInput />
            <SearchBar />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
