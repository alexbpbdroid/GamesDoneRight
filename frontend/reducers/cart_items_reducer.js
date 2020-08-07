import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from '../actions/cart_item_actions'

const cartItemsReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  switch(action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return action.cartItems
    case RECEIVE_CART_ITEM:
      newState[action.cartItem.id] = action.cartItem;
      return newState
    case REMOVE_CART_ITEM:
      delete newState[action.cartItemId]
      return newState;
    default:
      return oldState
  }
}

export default cartItemsReducer