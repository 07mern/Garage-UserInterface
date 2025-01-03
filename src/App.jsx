import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import Home from './Components/UserInterface/Sidebar Components/Home/Home';
import Profile from './Components/UserInterface/Sidebar Components/Profile/Profile';
import Settings from './Components/UserInterface/Sidebar Components/AddGarage/addGarage';
import Help from './Components/UserInterface/Sidebar Components/AddGarage/addGarage';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="garages" element={<Help />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
