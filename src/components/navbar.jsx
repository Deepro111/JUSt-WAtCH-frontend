import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login'); // this will route to the login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button onClick={handleSignInClick} className="signin-btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
