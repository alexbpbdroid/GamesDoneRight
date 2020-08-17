import { connect } from 'react-redux';
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
    fetchGames: () => dispatch(fetchGames()),
    fetchWishlists: () => dispatch(fetchWishlists()),
    deleteWishlist: (wishlistId) => dispatch(deleteWishlist(wishlistId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage)