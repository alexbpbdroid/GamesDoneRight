import React from 'react';

class WishlistPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWishlists(this.props.currentUser.id);
    this.props.fetchGames();
  }

  deleteWishlist(wishlistId) {
    this.props.deleteWishlist(wishlistId);
  }

  render() {

    const { currentUser, wishlists } = this.props;
    let userWishlist = Object.values(wishlists)
      .filter((wishlist) => wishlist.user_id === currentUser.id)
    let gameIds = userWishlist.map((wishlist) => wishlist.game_id)
    let games = Object.values(this.props.games)
      .filter((game) => gameIds.includes(game.id))

    return (
      <div className="wishlist">
        WISHLISTED TITLES ({games.length})
        <div className="wishlist-games">
          {games.map((game) => 
            <div className="wishlist-single-game">
              {game.title}{game.price}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default WishlistPage;