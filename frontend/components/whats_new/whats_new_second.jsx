import React from 'react';

function WhatsNewSecond(props) {

  let games = props.games

  return (
    <div className="whats-new-slider-2">
      <div className="new-card-4">
        <a href="/#/games/8">
          <img className="new-card-4-upper" src={games[7].photoUrls[3]} alt="" />
        </a>
        <div className="new-card-4-middle">
          {games[7].title}
        </div>
        <div className="new-card-4-lower">
          $&nbsp;{games[7].price}
        </div>
      </div>

      <div className="new-card-5">
        <a href="/#/games/10">
          <img className="new-card-5-upper" src={games[9].photoUrls[3]} alt="" />
        </a>
        <div className="new-card-5-middle">
          {games[9].title}
        </div>
        <div className="new-card-5-lower">
          $&nbsp;{games[9].price}
        </div>
      </div>

      <div className="new-card-6">
        <a href="/#/games/5">
          <img className="new-card-6-upper" src={games[4].photoUrls[3]} alt="" />
        </a>
        <div className="new-card-6-middle">
          {games[4].title}
        </div>
        <div className="new-card-6-lower">
          $&nbsp;{games[4].price}
        </div>
      </div>
    </div>
  )

}

export default WhatsNewSecond