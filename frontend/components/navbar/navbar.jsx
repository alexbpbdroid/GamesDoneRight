import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {
  const defaultLinks = () => (
    <>
      <div className="thin-purple-bar"></div>
      <nav className="navbar">
        
        
        <div className="middle-navbar-links">
          
          <Link to="/"><img src={window.logoURL} className="logo-icon" /></Link>
            <Link to="/">STORE</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">ABOUT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">COMMUNITY</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">SUPPORT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
                  
            <div className="dropdown">
            <Link to="/signup" className="sign-in-link">SIGN IN</Link>&nbsp;<img src={window.arrowURL} className="sign-in-arrow" />
              <div className="dropdown-content" id="sign-in-drop">
                <nav className="sign-in-drop-buttons">
                <button class="modal-btn" id="create-account-button" onClick={() => openModal('signup')}>CREATE ACCOUNT</button>
                  {/* <button class="modal-btn" id="create-account-button">CREATE ACCOUNT</button> */}
                <button class="modal-btn" id="sign-in-button" onClick={() => openModal('login')}>SIGN IN</button>
                  {/* <button class="modal-btn" id="sign-in-button">SIGN IN</button> */}

                </nav>
                <div className="dropGames">
                    <img src={window.dropGamesURL} />
                </div>

                <p id="gog-description"><strong>GOG.com is a digital distribution platform – an online store with a curated selection of games, an optional gaming client giving you freedom of choice, and a vivid community of gamers.</strong> All of this born from a deeply rooted love for games, utmost care about customers, and a belief that you should own the things you buy.</p>
            </div>
          </div>
          
        </div>

        <div className="cart-search">
          <Link to="/"><img src={window.cartURL} className="cart-icon" /></Link>
          <Link to="/"><img src={window.searchURL} className="search-icon" /></Link>
        </div>
        
      </nav>
      {/* <div class="modal-bg">
        <div class="modal"></div>
          <div class="modal-title">
          <img src={window.logo2URL} className="gog-icon" />
            <h2 className="modal-header">SIGN-UP</h2>
          </div>
          
          <label>Username: </label>
          <input type="text" name="Username"/>
          <label>Password: </label>
          <input type="text" name="Password"/>
          <button>SIGN UP NOW</button>
      </div> */}
    
    </>
  );
  const personalNavBar = () => (

    <>
      <div className="thin-purple-bar"></div>
      <nav className="navbar">


        <div className="middle-navbar-links">

          <Link to="/"><img src={window.logoURL} className="logo-icon" /></Link>
          <Link to="/">STORE</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
          <Link to="/">ABOUT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
          <Link to="/">COMMUNITY</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
          <Link to="/">SUPPORT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />

          <div className="dropdown">
            <Link to="/signup" className="current-user-link">{currentUser.username}</Link>&nbsp;<img src={window.arrowURL} className="sign-in-arrow" />
            <div className="dropdown-content" id="sign-in-drop">
              <nav className="user-drop-header">
                <p>Your Account</p><br/>
                <div>
                  {currentUser.username}
                </div>
              </nav>
            </div>
          </div>

        </div>

        <div className="cart-search">
          <Link to="/"><img src={window.cartURL} className="cart-icon" /></Link>
          <Link to="/"><img src={window.searchURL} className="search-icon" /></Link>
        </div>

      </nav>
      

      <hgroup className="header-group">
        {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>

      {/* <script src="../modal/modal.js"></script> */}
    </>

  );

  return currentUser ? personalNavBar() : defaultLinks();
};


export default NavBar;