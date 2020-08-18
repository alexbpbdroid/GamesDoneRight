import { connect } from 'react-redux';
import { fetchGames } from '../../actions/game_actions';
import CartPage from './cart_page';
import { fetchCarts, deleteCart } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.entities.games,
    carts: state.entities.carts,
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchCarts: () => dispatch(fetchCarts()),
    deleteCart: (cartId) => dispatch(deleteCart(cartId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)