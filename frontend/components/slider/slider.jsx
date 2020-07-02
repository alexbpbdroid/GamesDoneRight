import React, {useState} from 'react'

function Slider() {
  
  let sliderArr = [
    <a href="/#/games/1"><div className='bg1' /></a>,
    <a href="/#/games/2"><div className='bg2' /></a>,
    <a href="/#/games/3"><div className='bg3' /></a>,
    <a href="/#/games/4"><div className='bg4' /></a>,
    <a href="/#/games/5"><div className='bg5' /></a>
  ]
  
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  const [x, setX] = useState(0);
  
  return (
    <div className="outer-slider-container">
      <button id="goLeft"  onClick={goLeft}>
        <i className="fa fa-chevron-circle-left"></i>
      </button>
      <div className="slider">  
        {
        sliderArr.map((item, index) => {
            return (
              <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
                {item}
              </div>
            );
        })}
      </div>
      <button id="goRight" onClick={goRight}>
        <i className="fa fa-chevron-circle-right"></i>
      </button>
    </div>
  ); 
}

export default Slider;