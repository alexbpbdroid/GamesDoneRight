import React from 'react';
import { Link } from 'react-router-dom';
import Search from "../search/search_container"

const Navbar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div>
      <div className="thin-purple-bar"></div>
      <nav className="navbar">
        <div className="centered-nav">
          <div className="middle-navbar-links">
            <Link to="/"><img id="gdr-small-logo" src={window.gdrLogoURL} className="logo-icon" /></Link>
            <div className="nav-store-link"><Link className="nav-store-text" to="/">STORE</Link></div>
            ABOUT&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <div className="dropdown">
              <div className="sign-in-drop-text">SIGN IN &nbsp;<img src={window.arrowURL} className="sign-in-arrow" /></div>
              <div className="dropdown-content" id="sign-in-drop">
                <nav className="sign-in-drop-buttons">
                  <button className="modal-btn" id="create-account-button" onClick={() => openModal('signup')}>CREATE ACCOUNT</button>
                  <button className="modal-btn" id="sign-in-button" onClick={() => openModal('login')}>SIGN IN</button>
                </nav>
                <div className="dropGames">
                  <img src={window.dropGamesURL} />
                </div>
                <p id="gog-description"><strong>GDR.com is a digital distribution platform – an online store with a curated selection of games, an optional gaming client giving you freedom of choice, and a vivid community of gamers.</strong> All of this born from a deeply rooted love for games, utmost care about customers, and a belief that you should own the things you buy.</p>
                <hr id="purple-line"/>
              </div>
            </div>
          </div>
          <div className="cart-search-outer">
            <div className="cart-search">
              <Search />
              <span id="cart-icon" className="material-icons">shopping_cart</span>
            </div>
          </div>
        </div>
      </nav>
  </div>
  );

  const personalNavbar = () => (
    <div>
      <div className="thin-purple-bar"></div>
      <nav className="navbar">
        <div className="centered-nav">    
          <div className="middle-navbar-links">
            <Link to="/"><img id="gdr-small-logo" src={window.gdrLogoURL} className="logo-icon" /></Link>
            <div className="nav-store-link"><Link className="nav-store-text" to="/">STORE</Link></div>
            ABOUT&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <div className="user-dropdown">
              <div className="user-dropdown-link">{currentUser.username}&nbsp;<img src={window.arrowURL} className="sign-in-arrow" /></div>            
              <div className="user-dropdown-content" id="user-menu-drop">
                <div className="user-drop-header">              
                  <img className="profile-circle" src={window.profileURL}></img>
                    <div className="right-account-info">
                      <div className="your-account-text">Your Account</div>
                      <div className="user-drop-username-text">
                        {currentUser.username}
                      </div>
                    </div>                  
                </div>
                <br/>
                <Link to="/carts"><div id="user-dropdown-links" className="cart-link">Shopping Cart</div></Link>
                <Link to="/wishlists"><div id="user-dropdown-links" className="wishlist-link">Wishlist</div></Link>
                <div id="user-dropdown-links" className="sign-out-link" onClick={logout}>Sign Out</div>
              </div>
            </div>
          </div>
          <div className="cart-search-outer">
            <div className="cart-search">
              <Search />
              <Link to="/carts"><span id="cart-icon" className="material-icons">shopping_cart</span></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
  return (
    currentUser ?
    personalNavbar() :
    sessionLinks()
  );
};

export default Navbar;
