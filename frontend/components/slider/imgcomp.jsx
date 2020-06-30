import React from 'react';

function ImgComp({src}) {
  let imgStyles = {
    // width: 100 + '%',
    width: "auto",
    height: "auto"
    
  }
  // return (<div />)
  return <img src={src} alt="slide-img" style={imgStyles}></img>
}

export default ImgComp;