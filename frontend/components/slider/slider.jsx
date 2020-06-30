import React, {useState} from 'react'
import ImgComp from './imgcomp'



function Slider() {
  

  let sliderArr = [
    <a href="/#/games/1">
      <div className='bg1'>
    
      </div>
    </a>,
     
    <div className='bg2' />,
    <div className='bg3' />,
    <div className='bg4' />,
    <div className='bg5' />,
    <div className='bg6' />
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
      <button id="goRight"  onClick={goRight}>
        <i className="fa fa-chevron-circle-right"></i>
      </button>
    </div>
  ); 
}

export default Slider;