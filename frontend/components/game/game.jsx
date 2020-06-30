import React from 'react';
import { Link } from 'react-router-dom';

import GameDetail from './game_detail';
import { ProtectedRoute } from '../../util/route_util';

class GamePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId)
  }
  
  render () {
    
    let game = this.props.game

    if (!game) {
      return null;
    }

    const styles = {
      headerContainer: {
        width: 100 + '%',
        backgroundImage: `url(${game.photoUrls[0]})`
      }
    };

    return (
      <>
        <div className="show-header-outer" style={styles.headerContainer}>
          <div className="show-page-header">
            <div className="play-button-container">
              <img id="play-button-img" src="https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/icons/play-video-button.png"/>
            </div>
            <div className="game-logo-container">
              <img id="game-logo-img" src={game.photoUrls[1]} />
            </div>
          </div>
        </div>

        <div className="game-title-outer">
          <div className="game-title-text">
            <h1>{game.title}</h1>
          </div>
        </div>

        <div className="show-page-container">
          

          <div className="show-content-outer">
            <div className="show-content-container"> 
              <div className="left-side-content">
                Description
                <hr />
                <br/>
                <div className="game-description-image">
                  <img src={game.photoUrls[2]} />
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="description-text">
                  <strong>{game.title}&nbsp;</strong>{game.description}
                </div> 
              </div>
              <div className="right-side-content">
                Why buy on GDR.COM?
                <hr/>
                <br/>
                <ul>
                  <li>✔️<strong> DRM FREE.</strong> No activation or online connection required to play.</li>
                  <li>✔️<strong> Safety and satisfaction.</strong> Stellar support 24/7 and full refunds up to 30 days.</li>
                </ul>
                <br/><br/><br/><br/>            
                Game Details
                <hr/>
                <br/>
                <ul>
                  <li>Release Date: {game.release_date}</li>
                  <li>Works On: {game.works_on}</li>
                  <li>Publisher: {game.publisher}</li>
                  <li>Developer: {game.developer}</li>
                  <li>ESRB: {game.esrb_rating}</li>
                </ul>
              </div>            
            </div>
          </div> 
        </div>
    </>
    )
  }
}

export default GamePage;