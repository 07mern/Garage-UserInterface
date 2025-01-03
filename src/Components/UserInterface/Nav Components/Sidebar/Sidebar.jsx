import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" end>
            <i className="bi bi-house-door-fill"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <i className="bi bi-person-fill"></i> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
          <i class="fa-regular fa-heart"></i> My Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink to="/garages">
          <i class="fa-regular fa-handshake"></i> Add Your Garage
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" className="logout">
            <i className="bi bi-box-arrow-right"></i> Logout
          </NavLink>
        </li>
      </ul>
    </div>
    
  );
};

export default Sidebar;
