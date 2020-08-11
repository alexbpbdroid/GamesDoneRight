import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGames } from '../../actions/game_actions';
import WishlistPage from './wishlist_page';
import { fetchWishlists, deleteWishlist } from '../../actions/wishlist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.entities.games,
    wishlists: state.entities.wishlists,
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchgames: () => dispatch(fetchGames()),
    fetchWishlists: () => dispatch(fetchWishlists()),
    deleteWishlist: (wishlistId) => dispatch(deleteWishlist(wishlistId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps))(WishlistPage)