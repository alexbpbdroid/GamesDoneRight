import React from 'react';
import Slider from '../slider/slider'
import { HashRouter } from 'react-router-dom';
import WhatsNew from '../whats_new/whats_new'
import DiscoverGames from '../discover_games/discover_games'

class StoreFront extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {

    return (

      <div className='storeFront'>
        <div className="whats-new-text">
          <div className="testing-text">Featured</div>
        </div>

        <Slider />

        <div className="gamers-text">
          <p>We are GDR.com, the <span className="gamers-text-span">DRM-free</span> home for a <span className="gamers-text-span">curated selection</span> of games.  This place was <span className="gamers-text-span">made for gamers,</span> so make yourself at home.</p>
        </div>

        <div className="whats-new-text">
          <div className="testing-text">New releases</div> 
        </div>

        <div className="new-slider-container">
          <WhatsNew />
        </div>

        <div className="discover-games-outer">
          <div className="testing-text">Discover games</div>
        </div>

        <div className="discover-games-container">
          <DiscoverGames />
        </div>
      </div>

    )
  }
}

export default StoreFront;