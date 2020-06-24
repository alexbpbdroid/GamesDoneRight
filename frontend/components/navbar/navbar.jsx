import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const defaultLinks = () => (
    <nav className="navbar">
      
      <div className="middle-navbar-links">
        
        <Link to="/"><img src={window.logoURL} className="logo-icon" /></Link>
        <Link to="/">STORE <img src={window.arrowURL} className="arrow-icon" /></Link>
        <Link to="/">ABOUT <img src={window.arrowURL} className="arrow-icon" /></Link>
        <Link to="/">COMMUNITY <img src={window.arrowURL} className="arrow-icon" /></Link>
        <Link to="/">SUPPORT <img src={window.arrowURL} className="arrow-icon" /></Link>
                
        <div class="dropdown">
          <Link to="/signup" className="sign-in-link">SIGN IN <img src={window.arrowURL} className="arrow-icon" /></Link>
            <div class="dropdown-content" id="sign-in-drop">
              <nav class="sign-in-drop-buttons">
                <Link to="/"><button id="create-account-button">CREATE ACCOUNT</button></Link>
                <Link to="/"><button id="sign-in-button">SIGN IN</button></Link>
                
              </nav>

            <p id="gog-description"><strong>GOG.com is a digital distribution platform – an online store with a curated selection of games, an optional gaming client giving you freedom of choice, and a vivid community of gamers.</strong> All of this born from a deeply rooted love for games, utmost care about customers, and a belief that you should own the things you buy.</p>
          </div>
        </div>
        
      </div>

      <div className="cart-search">
        <Link to="/"><img src={window.cartURL} className="cart-icon" /></Link>
        <Link to="/"><img src={window.searchURL} className="search-icon" /></Link>
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