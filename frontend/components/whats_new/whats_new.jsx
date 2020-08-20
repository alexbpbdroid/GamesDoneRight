import React from 'react';

function WhatsNew(props) {

  let games = props.games

  return (
    <div className="whats-new-slider">
      {games.reverse().slice(0,3).map((game, i) => (
        <div className="new-card-1" key={i}>
        <a href={`/#/games/${game.id}`}>
          <img className="new-card-1-upper" src={game.photoUrls[3]} alt="" />
        </a>
        <div className="new-card-1-middle">
          {game.title}
        </div>
        <div className="new-card-1-lower">
          $&nbsp;{game.price}
        </div>
        </div> 
      ))}   
    </div>
  )

}

export default WhatsNew