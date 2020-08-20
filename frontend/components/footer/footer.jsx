import React from 'react';

const GlobalFooter = () => (
  <div className='global-footer'>
    <div className='upper-footer'>
      <div className="upper-footer-content">
        <div className="footer-icons">
          <a href="https://github.com/alexbpbdroid"><i id="footer-git" className="fab fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/alex-daniel-7389071b1/"><i id="footer-linkedin" className="fab fa-linkedin"></i></a>
          <a href="http://www.alexjdaniel.com/"><i id="footer-personal" className="fas fa-user-circle"></i></a>
        </div>
      </div>
    </div>

    <div className='middle-footer'>
      <div className="middle-footer-content">
        <div className="middle-footer-icon"><img id="middle-footer-icon" src={window.gdrLogoURL} alt="" /></div>&nbsp;&nbsp;&nbsp;
        <div>Language: &nbsp;&nbsp;&nbsp; <span className="purple-text">English</span></div>
      </div>
    </div>

    <div className='bottom-footer'>
      <div className="bottom-footer-content">
        <div>© GDR sp. z o.o. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</div>
      </div>
    </div>
  </div>
)

export default GlobalFooter;