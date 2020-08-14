import React from 'react';

const GlobalFooter = () => (
  <div className='global-footer'>
    <div className='upper-footer'>
      <div className="upper-footer-content">
        <div>Placeholder Link &nbsp;&nbsp;&nbsp; Placeholder Link &nbsp;&nbsp;&nbsp; Placeholder Link &nbsp;&nbsp;&nbsp; Placeholder Link &nbsp;&nbsp;&nbsp; Placeholder Link &nbsp;&nbsp;&nbsp; Placeholder Link</div>
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