import React, {useState} from 'react'
import ImgComp from './imgcomp'



function Slider() {
  

  let sliderArr = [
    <ImgComp src={window.img1} />,
    <ImgComp src={window.img2} />,
    <ImgComp src={window.img3} />,
    <ImgComp src={window.img4} />,
    <ImgComp src={window.img5} />
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
        <i class="fa fa-chevron-circle-left"></i>
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
        <i class="fa fa-chevron-circle-right"></i>
      </button>
    </div>
  ); 
}

export default Slider;