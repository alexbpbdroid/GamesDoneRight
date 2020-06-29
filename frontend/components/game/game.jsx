import React from 'react';
import { Link } from 'react-router-dom';

import GameDetail from './game_detail';
import { ProtectedRoute } from '../../util/route_util';

class GamePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    
    return (
      <h1>THIS IS THE GAME SHOW PAGE</h1>
    )
  }
}

export default GamePage;