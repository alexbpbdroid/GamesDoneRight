import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div>
      <div className="thin-purple-bar"></div>
      <nav className="navbar">

        <div className="centered-nav">
          <div className="middle-navbar-links">

            <Link to="/"><img id="gdr-small-logo" src="https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/icons/gdr-logo.png?versionId=null" className="logo-icon" /></Link>
            <Link to="/">STORE</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">ABOUT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">COMMUNITY</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">SUPPORT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />

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
              <Link to="/"><img src={window.cartURL} className="cart-icon" /></Link>
              <Link to="/"><img src={window.searchURL} className="search-icon" /></Link>
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

            <Link to="/"><img id="gdr-small-logo" src="https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/icons/gdr-logo.png?versionId=null" className="logo-icon" /></Link>
            <Link to="/">STORE</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">ABOUT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">COMMUNITY</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />
            <Link to="/">SUPPORT</Link>&nbsp;<img src={window.arrowURL} className="arrow-icon" />

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
                <div className="activity-feed-link">Activity feed</div>
                <br/>
                <div className="your-profile-link">Your profile</div>
                <hr/>
                <div className="games-link">Games</div>
                <br />
                <div className="movies-link">Movies</div>
                <br />
                <div className="wishlist-link">Wishlist</div>
                <br/>
                <div className="redeem-code-link">Redeem a code</div>
                <hr/>
                <div className="friends">Friends</div>
                <br/>
                <div className="chat-link">Chat</div>
                <hr/>
                <div className="your-wallet-link">Your Wallet</div>
                <br/>
                <div className="privacy-settings-link">Privacy and settings</div>
                <br/>
                <div className="language-currency-link">Language and currency</div>
                <hr/>
                <div className="sign-out-link" onClick={logout}>Sign Out</div>
              </div>
            </div>

          </div>
          <div className="cart-search-outer">
            <div className="cart-search">
              <Link to="/"><img src={window.cartURL} className="cart-icon" /></Link>
              <Link to="/"><img src={window.searchURL} className="search-icon" /></Link>
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
