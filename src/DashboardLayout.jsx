import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/UserInterface/Navbar';
import Sidebar from './Components/UserInterface/Nav Components/Sidebar/Sidebar';
import './Components/UserInterface/Navbar.css';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`user-interface ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'with-sidebar' : 'full-screen'}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
