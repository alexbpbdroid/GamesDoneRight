import React from 'react';
import Slider from '../slider/slider'
import WhatsNew from '../whats_new/whats_new'
import WhatsNewSecond from '../whats_new/whats_new_second'
import DiscoverGames from '../discover_games/discover_games'

function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class StoreFront extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.games.length) this.props.fetchGames();
  }

  render () {

    if (!this.props.games.length) return null;
    const shuffledGames = shuffleArray(this.props.games);
    let games = []
    shuffledGames.forEach(game => {
      games.push(game)
    })
    

    return (

      <div className='storeFront'>
        <div className="whats-new-text">
          <div className="testing-text">Featured</div>
        </div>

        <Slider games={games}/>

        <div className="gamers-text">
          <p>We are GDR.com, your <span className="gamers-text-span">DRM-free </span>source for modern and classic games.  This place was <span className="gamers-text-span">designed for gamers,</span> so make yourself at home.</p>
        </div>

        <div className="whats-new-text">
          <div className="testing-text">New releases</div> 
        </div>

        <div className="new-slider-container">
          <WhatsNew games={games}/>
        </div>
        <div className="new-slider-container-2">
          <WhatsNewSecond games={games}/>
        </div>

        <div className="best-sellers-text">
          <div className="testing-text">Best Sellers</div>
        </div>

        <div className="discover-games-container">
          <DiscoverGames games={games}/>
        </div>
      </div>

    )
  }
}

export default StoreFront;