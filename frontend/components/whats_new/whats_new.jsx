import React from 'react';

function WhatsNew(props) {

  let games = props.games
  
  return (
    <div className="whats-new-slider">

      <div className="new-card-1">
        <a href="/#/games/6">
          <img className="new-card-1-upper" src={games[5].photoUrls[3]} alt=""/>
        </a>
        <div className="new-card-1-middle">
          {games[5].title}
        </div>
        <div className="new-card-1-lower">
          $&nbsp;{games[5].price}
        </div>
      </div> 

      <div className="new-card-2">
        <a href="/#/games/2">
          <img className="new-card-2-upper" src={games[1].photoUrls[3]} alt="" />
        </a>
        <div className="new-card-2-middle">
          {games[1].title}
        </div>
        <div className="new-card-2-lower">
          $&nbsp;{games[1].price}
        </div>
      </div>

      <div className="new-card-3">
        <a href="/#/games/7">
          <img className="new-card-3-upper" src={games[6].photoUrls[3]} alt="" />
        </a>
        <div className="new-card-3-middle">
          {games[6].title}
        </div>
        <div className="new-card-3-lower">
          $&nbsp;{games[6].price}
        </div>
      </div>
    </div>
  )

}

export default WhatsNew