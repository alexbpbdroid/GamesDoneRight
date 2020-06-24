import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const defaultLinks = () => (
    <nav className="navbar">
      <div className="middle-navbar-links">
        <Link to="/">HOME</Link>
        &nbsp;&nbsp;
        <Link to="/">STORE</Link>
        &nbsp;&nbsp;
        <Link to="/">ABOUT</Link>
        &nbsp;&nbsp;
        <Link to="/">COMMUNITY</Link>
        &nbsp;&nbsp;
        <Link to="/">SUPPORT</Link>
        &nbsp;&nbsp;
        <div class="dropdown">
        <Link to="/signup" className="sign-in-link">SIGN IN</Link>
          <div class="dropdown-content" id="sign-in-drop">
            
            <p>GOG.com is a digital distribution platform – an online store with a curated selection of games, an optional gaming client giving you freedom of choice, and a vivid community of gamers. All of this born from a deeply rooted love for games, utmost care about customers, and a belief that you should own the things you buy.</p>
          </div>
        </div>
      </div>
    </nav>
  );
  const personalNavBar = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalNavBar() : defaultLinks();
};


export default NavBar;