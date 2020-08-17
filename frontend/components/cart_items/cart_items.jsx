import React from 'react';
import { Link } from 'react-rotuer-dom';
import { deleteCartItem } from '../../actions/cart_item_actions';
import { render } from 'node-sass';

class CartItemsPage extends React.Component {
  constructor(props) {
    super(props);
  }
}

componentDidMount() {
  if(this.props.currentUser) this.props.fetchCartItems(this.props.currentUser.id);
}

deleteCartItem(cartItemId) {
  this.props.deleteCartItem(cartItemId);
}

render() {
  if (!this.props.cartItems) {
    return null;
  }

  if (!this.props.currentUser) {
    return (
      <div>Must be logged in to view your shopping cart</div>
    )
  }

  const { currentUser, cartItems } = this.props;
  let userCartItems = Object.values(cartItems)
    .filter((cartItem) => cartItem.user_id ===  currentUser.id)
  
  return (
    <div>
      <div className="cart-header">SHOPPING CART ITEMS ( {userCartItems.games.length} )</div>
      <div className="cart-games">
        { userCartItems.games.map((game) => (
          <Link to={`/games/${game.id}`} className="cart-single-game" key={game.id}>
            <div className="cart-game-title">{game.title}</div>
            <button id="cart-delete-btn" onClick={() =>
              this.props.deleteCartItem(userCartItems.find((cartItem) =>
                cartItem.game_id === game.id).id)}
            >x
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CartItemsPage;