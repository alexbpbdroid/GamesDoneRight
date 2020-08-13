import React, {useState} from 'react'

function Slider(props) {
  
  let games = props.games
  let slicedGames = games.slice(0,5)
  
  let sliderArr = slicedGames.map((game) => 
    (<a href={`/#/games/${game.id}`}><img className="slider-img" src={game.photoUrls[4]} alt=""/></a>)
  )
  
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