import React from 'react';
import {Link} from 'react-router-dom';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCart = this.deleteCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchGames();
    if(this.props.currentUser) this.props.fetchCarts(this.props.currentUser.id);
  }
  
  deleteCart(cartId) {
    this.props.deleteCart(cartId)
    // .then(() => this.props.openModal('checkout'))
    // this.props.openModal('checkout')
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
    let totalPrice = 0

    games.forEach((game) => {
      totalPrice += game.price
    })
  
    return (
      <div className="cart-outer">
        <div className="cart-inner">
          <div className="cart-header">
            <div className="cart-your-order">YOUR ORDER ( {userCart.length} )</div><div className="cart-payment">PAYMENT</div>
          </div>
          <div className="cart-and-payment">
            <div className="cart-games">
              {games.map((game) => (
                <div className="cart-single-game-outer" key={game.id}>
                  <div className="cart-single-game">
                    <Link to={`/games/${game.id}`} className="cart-thumbnail-title">
                      <img className="cart-thumbnail" src={game.photoUrls[2]} alt=""/>
                      <div className="cart-title">{game.title}</div>
                    </Link>
                  <div id="cart-delete-price-id" className="cart-delete-price">
                    <button id="cart-delete-btn" onClick={() =>
                      this.props.deleteCart(userCart.find((cart) =>
                        cart.game_id === game.id).id)}
                    >x
                    </button>
                    <div className="cart-price">$ {game.price}</div>
                  </div>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <div className="cart-total-price"><div>ORDER TOTAL :</div><div>$ {totalPrice.toFixed(2)}</div></div>
              </div>
            </div>
            <div className="cart-payment-form">
              <form action="">
                <div className="accepted-and-cc-icons">
                  <label>Accepted Cards</label>
                  <div className="cart-form-icons">
                    <i id="visa" className="fa fa-cc-visa" ></i>
                    <i id="amex" className="fa fa-cc-amex" ></i>
                    <i id="mastercard" className="fa fa-cc-mastercard" ></i>
                    <i id="discover" className="fa fa-cc-discover" ></i>
                  </div>
                </div>
                <div className="cart-cc-outer">
                  <div className="cart-cc-number">
                    <label className="cc-label">Card Number</label>
                    <center><input className="cart-cc-input-box" type="text" placeholder="1234 5678 9012 3456" /></center>
                  </div>
                  <div className="cart-expiry-date-cvc">
                    <div className="cart-expiry">
                      <label className="exp-label">Expiry date</label>
                      <input className="cart-expiry-box" type="text" placeholder="MM / YY"/>
                    </div>
                    <div className="cart-cvc">
                      <label className="cvc-label">CVC / CVV</label>
                      <input className="cart-cvc-box" type="text" placeholder="123"/>
                    </div>
                  </div>
                </div>
                <div className="cart-form-total-btn">
                  <div className="cart-form-total">$ {totalPrice.toFixed(2)}</div>
                  <div className="cart-form-btn">
                    <button className="cart-pay-btn" onClick={() =>
                      this.deleteCart("all")}>PAY FOR YOUR ORDER NOW</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="cart-disclaimer">
            <span>Note:  Information is neither saved nor used in any way</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CartPage;
