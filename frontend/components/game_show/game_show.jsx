import React from 'react';
import { Link } from 'react-router-dom';

import GameDetail from './game_detail';
import { ProtectedRoute } from '../../util/route_util';

const GameShow = ({ game, gameId, fetchGame }) => {
  const games = {
    [gameId]: game
  }

  return (
    <div className="single-game-show">
      <Link to="/">Back to Games Index</Link>
      <div className="game-details">
        <GameDetail game={game} />
      </div>
    </div>
  )
}


export default GameShow;