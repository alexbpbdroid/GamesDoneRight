import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container';


class GamePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
    this.props.fetchWishlists();
    window.scrollTo(0, 0);
  }
  
  render () {
    
    let game = this.props.game
    
    if (!game) {
      return null;
    }

    return (
      <>
        <div className="show-header-outer">
          <img id="show-header-img" src={game.photoUrls[0]} alt=""/>
          <div className="play-button-container">
            <span className="material-icons" id="show-play-button" onClick={() => this.props.openModal('video')}>
              play_circle_outline
            </span>
          </div>
        </div>
        <div className="price-box-wrapper">
          <div className="price-box-outer">
            <div className="price-box">
              $&nbsp;{game.price}
              <br/>
              <button className="big-purchase-button">Add to cart</button>
              
              <center className="wishlist-text"><span class="material-icons">favorite_border</span> Wishlist it</center>
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