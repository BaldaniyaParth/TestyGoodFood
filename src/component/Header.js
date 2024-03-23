import React, { useState, useEffect } from 'react';
import logo from '../assets/img/TestyGoodFood.png';
import { Link } from 'react-router-dom';
import useOnline from '../Hooks/useOnline';
import { useAuth } from '../Hooks/useAuth';

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="TestyGoodFood Logo" />
    </a>
  );
};

const Header = () => {
  
  const { isLoggedIn, logout, login } = useAuth();

  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li><Link to="/help" className="link">Help</Link></li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button className="logout" onClick={logout}>Logout <span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span></button>
          ) : (
            <Link to="/login"><button className="login" onClick={login}>Login <span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span></button></Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
