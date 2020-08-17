import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import CartItemsPage from './cart_items'

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.entities.cartItems,
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsPage)