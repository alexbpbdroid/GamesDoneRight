import * as CartUtil from '../util/cart_util';

export const RECEIVE_CARTS = "RECEIVE_CARTS";
export const RECEIVE_CART = "RECEIVE_CART";
export const REMOVE_CART = "REMOVE_CART";

const receiveCart = (carts) => ({
  type: RECEIVE_CART,
  carts
})

const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
})

const removeCart = (cartId) => ({
  type: REMOVE_CART,
  cartId
})

export const fetchCarts = () => dispatch => {
  return CartUtil.fetchCarts()
    .then((carts) => dispatch(receiveCarts(carts)))
}

export const fetchCart = (cartId) => dispatch => {
  return CartUtil.fetchCart(cartId)
    .then((cart) => dispatch(receiveCart(cart)))
}

export const createCart = (cart) => dispatch => {
  return CartUtil.createCart(cart)
    .then((cart) => dispatch(receiveCart(cart)))
}

export const deleteCart = (cartId) => dispatch => {
  return CartUtil.deleteCart(cartId)
    .then(() => dispatch(removeCart(cartId)))
}