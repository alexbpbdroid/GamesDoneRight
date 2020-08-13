import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GamePage from './game';
import { openModal } from '../../actions/modal_actions',
import { fetchWishlists, createWishlist, deleteWishlist } from '../../actions/wishlist_actions'

const mapStateToProps = ({ entities: { games }}, state, ownProps) => ({
  game: games[ownProps.match.params.gameId],
  wishlists: Object.values(state.entities.wishlists),
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  fetchGame: (gameId) => dispatch(fetchGame(gameId)),
  openModal: modal => dispatch(openModal(modal)),
  fetchWishlists: () => dispatch(fetchWishlists()),
  createWishlist: (wishlist) => dispatch(createWishlist(wishlist)),
  deleteWishlist: (wishlistId) => dispatch(deleteWishlist(wishlistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);