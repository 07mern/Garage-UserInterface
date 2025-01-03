import React from 'react';
import '../Navbar.css'

const SearchBar = () => {
  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search garages..."
        aria-label="Search"
      />
      <button className="btn search-btn" type="submit">
        Search
      </button>
    </>
  );
};

export default SearchBar;
