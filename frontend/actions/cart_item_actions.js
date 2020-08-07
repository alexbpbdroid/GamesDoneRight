import * as CartItemUtil from '../util/cart_item_util'

export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveCartItems = cartItems => ({
  type: RECEIVE_ALL_CART_ITEMS,
  cartItems
})

const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem
})

const removeCartItem = cartItemId => ({
  type: REMOVE_CART_ITEM,
  cartItemId
})

export const fetchCartItems = () => dispatch => {
  return CartItemUtil.fetchCartItems()
  .then(cartItems => dispatch(receiveCartItems(cartItems)))
}

export const createCartItems = (gameId) => dispatch => {
  return CartItemUtil.createCartItem(gameId)
  .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const deleteCartItem = (cartItemId) => dispatch => {
  return CartItemUtil.deleteCartItem(cartItemId)
  .then(()=> dispatch(removeCartItem(cartItemId)))
}

