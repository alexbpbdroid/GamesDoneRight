import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions'
import GameDetail from './game_detail';
import { ProtectedRoute } from '../../util/route_util';
import ReviewIndexContainer from '../reviews/review_index_container'

class GamePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId)
    window.scrollTo(0, 0);
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
          <div className="play-button-container">
            <img id="play-button-img" src="https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/icons/play-video-button.png" onClick={() => this.props.openModal('video')}/>
          </div>
        </div>
        <div className="price-box-wrapper">
          <div className="price-box-outer">
            <div className="price-box">
              $&nbsp;{game.price}
              <br/>
              <button className="big-purchase-button">Add to cart</button>
              
              <center className="wishlist-text">Wishlist it</center>
            </div>
          </div>
        </div>
        <br/>
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
                <div className="game-description-image">
                  <img src={game.photoUrls[1]} />
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="description-text">
                  {game.description}
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
                <div className="details-container">
                  <div className="labels-container">
                    <ul>
                      <li>Release Date:</li>
                      <li>Works On:</li>
                      <li>Publisher:</li>
                      <li>Developer:</li>
                      <li>ESRB:</li>
                    </ul>
                  </div>     
                  <div className="values-container">
                    <ul>
                      <li>{game.release_date}</li>
                      <li>{game.works_on}</li>
                      <li>{game.publisher}</li>
                      <li>{game.developer}</li>
                      <li>{game.esrb_rating}</li>
                    </ul>
                  </div>
                </div>
                <hr/>
              </div>            
            </div>
            
          </div> 
          <div className="reviews-container">
            <div className="reviews-inner">User reviews
              <hr/>
              <ReviewIndexContainer game={game}/>
            </div>
          </div>
        </div>
    </>
    )
  }
}

export default GamePage;