import React from 'react';

function DiscoverGames(props) {

  let games = props.games

  return (
    <div className="discover-games-outer">
      <div className="discover-games-placeholder">
        {games.map((game) => (
          <a key={game.id} href={`/#/games/${game.id}`}>
            <div className="discover-game">
              <img className="discover-thumbnail" src={game.photoUrls[2]} alt=""/>
                <div className="outer-title-price">
                  <div className="just-title">{game.title}</div>
                  <div className="just-price">$&nbsp;{game.price}</div>           
                </div>
            </div>
          </a>
        ))}
      </div>
      <div className="discover-right-side">     
        <a href="/#/games/7"><img src={window.bigDiscoverURL} className="big-discover-right" /></a>
        <a href="/#/games/1"><img src={window.smallDiscoverURL} className="small-discover-right" /></a>
      </div>
    </div>   
  )
}

export default DiscoverGames