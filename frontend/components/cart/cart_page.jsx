import React from 'react';
import {Link} from 'react-router-dom';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
    if(this.props.currentUser) this.props.fetchCarts(this.props.currentUser.id);
  }
  
  deleteCart(cartId) {
    this.props.deleteCart(cartId);
  }
  
  render() {
    if (!this.props.currentUser) {
      return (
        <div className="cart-outer">
          <div className="cart-inner">
            <div>* Must be logged in to view your shopping cart</div>
          </div>
        </div>
      )
    }
    
    if(!this.props.games || !this.props.carts) {
      return null;
    }
  
    const { currentUser, carts } = this.props;
    let userCart = Object.values(carts)
      .filter((cart) => cart.user_id === currentUser.id)
    let gameIds = userCart.map((cart) => cart.game_id)
    let games = Object.values(this.props.games)
      .filter((game) => gameIds.includes(game.id))
  
    return (
      <div className="cart-outer">
        <div className="cart-inner">
          <div className="cart-header">YOU HAVE ( {games.length} ) ITEMS IN YOUR SHOPPING CART</div>
          <div className="cart-games">
            {games.map((game) => (
              <Link to={`/games/${game.id}`} className="cart-single-game" key={game.id}>
                <div className="cart-thumbnail-title">
                  <img className="cart-thumbnail" src={game.photoUrls[2]} alt=""/>
                  <div className="cart-title">{game.title}</div>
                </div>
                <div className="cart-delete-price">
                  <button id="cart-delete-btn" onClick={() => 
                    this.props.deleteCart(userCart.find((cart) => 
                      cart.game_id === game.id).id)}
                  >x
                  </button>
                  <div className="cart-price">$ {game.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CartPage;
