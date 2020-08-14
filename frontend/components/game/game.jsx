import React from 'react';
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
    } else if (!this.props.wishlists) {
      return null;
    }
    let wishlistBtn;
    const { currentUser, wishlists } = this.props;
    let userWishlists;
    let login = <div></div>
    if (!currentUser) { 
      userWishlists = [];
    } else {
      userWishlists = Object.values(wishlists).filter((wishlist) => wishlist.user_id === currentUser.id)
    }
    let thisWishlist = userWishlists.find((wishlist) => wishlist.game_id === game.id);
    let gameIds = userWishlists.map((wishlist) => wishlist.game_id);
    if (!gameIds.includes(game.id) && currentUser) {
      wishlistBtn = (
        <div className="unsaved-wishlist">
          <button className="add-wishlist-btn" onClick={() => this.props.createWishlist({
            game_id: game.id,
            saved: false
          })}>
            <span id="fav-btn" className="material-icons">favorite_border</span>
          </button> Wishlist it
        </div> 
      )
    } else if (!currentUser) {
      wishlistBtn = (
        <div className="unsaved-wishlist">
          <button className="add-wishlist-btn" onClick={() => this.props.openModal("login")}>
            <span id="fav-btn" className="material-icons">favorite_border</span>
          </button> Wishlist it
        </div>
      )
    } else {
      wishlistBtn = (
        <div className="saved-wishlist">
          <button className="delete-wishlist-btn" onClick={() => this.props.deleteWishlist(thisWishlist.id)}>
            <span id="fav-btn" className="material-icons">favorite</span>
          </button> Wishlisted
        </div>
      )
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
              <center className="wishlist-text">{wishlistBtn}</center>
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