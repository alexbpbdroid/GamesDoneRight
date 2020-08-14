import React from 'react';
import { Link } from 'react-router-dom';

class WishlistPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchWishlists(this.props.currentUser.id);
  }

  deleteWishlist(wishlistId) {
    this.props.deleteWishlist(wishlistId);
  }

  render() {
    if (!this.props.games || !this.props.wishlists || !this.props.currentUser) {
      return null;
    }
    const { currentUser, wishlists } = this.props;
    let userWishlist = Object.values(wishlists)
      .filter((wishlist) => wishlist.user_id === currentUser.id)
    let gameIds = userWishlist.map((wishlist) => wishlist.game_id)
    let games = Object.values(this.props.games)
      .filter((game) => gameIds.includes(game.id))

    return (
      <div className="wishlist-outer">
        <div className="wishlist-inner">
          <div className="wishlist-header">WISHLISTED TITLES ( {games.length} )</div>
          <div className="wishlist-games">
            {games.map((game) => (
              <>
                {/* <div className="wishlist-single-game" key={game.id}> */}
                <Link to={`/games/${game.id}`} className="wishlist-single-game" key={game.id}>
                  <div className="wishlist-thumbnail-title">
                    <img className="wishlist-thumbnail" src={game.photoUrls[2]} alt="" />
                    <div className="wishlist-title">{game.title}</div>
                  </div>
                  <div className="wishlist-delete-price">
                    <button id="wishlist-delete-btn" onClick={() =>
                    this.props.deleteWishlist(userWishlist.find((wishlist) =>
                      wishlist.game_id === game.id).id)}
                    >x
                    </button>
                    <div className="wishlist-price">$ {game.price}</div>
                  </div>
                </Link>
                {/* </div> */}
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default WishlistPage;