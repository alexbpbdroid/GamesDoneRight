import React from 'react';
import { withRouter } from 'react-router-dom';
import game_container from './game_container';

class Video extends React.Component {
  constructor(props) {
    super(props); 
  }


  render() { 
    
    let {game} = this.props
    if (game === undefined) {
      return null;
    }
    
    return (
      <div className="test-video-modal">
        <iframe width="1280" height="720" src={game.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
  }
}

export default withRouter(Video);
