import { RECEIVE_CART, RECEIVE_CARTS, REMOVE_CART} from '../actions/cart_actions';

const cartsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_CARTS:
      return action.carts;
    case RECEIVE_CART:
      newState[action.cart.id] = action.cart;
      return newState;
    case REMOVE_CART:
      delete newState[action.cartId];
      return newState;
    default:
      return oldState;
  }
}

export default cartsReducer
