import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GamePage from './game';
import { openModal } from '../../actions/modal_actions';
import { fetchWishlists, createWishlist, deleteWishlist } from '../../actions/wishlist_actions';
import { fetchCarts, createCart } from '../../actions/cart_actions'

const mapStateToProps = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.gameId],
  wishlists: Object.values(state.entities.wishlists),
  carts: Object.values(state.entities.carts),
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  fetchGame: (gameId) => dispatch(fetchGame(gameId)),
  openModal: modal => dispatch(openModal(modal)),
  fetchWishlists: () => dispatch(fetchWishlists()),
  createWishlist: (wishlist) => dispatch(createWishlist(wishlist)),
  deleteWishlist: (wishlistId) => dispatch(deleteWishlist(wishlistId)),
  createCart: (cart) => dispatch(createCart(cart)),
  fetchCarts: () => dispatch(fetchCarts())
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);