import React from 'react';
import './sidebar.css';
import { FaHome, FaSearch, FaBookmark, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">MOVIEAPP</div>
      <nav className="nav-links">
        <a href="#" className="nav-item">
          <FaHome className="icon" /> Home
        </a>
        <a href="#" className="nav-item">
          <FaSearch className="icon" /> Search
        </a>
        <a href="#" className="nav-item">
          <FaBookmark className="icon" /> Watchlist
        </a>
        <a href="#" className="nav-item">
          <FaCog className="icon" /> Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;