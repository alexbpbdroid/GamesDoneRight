import * as WishlistUtil from '../util/wishlist_util';

export const RECEIVE_WISHLISTS = "RECEIVE_WISHLISTS";
export const RECEIVE_WISHLIST = "RECEIVE_WISHLIST";
export const REMOVE_WISHLIST = "REMOVE_WISHLIST";

const receiveWishlists = (wishlists) => ({
  type: RECEIVE_WISHLISTS,
  wishlists
});

const receiveWishlist = (wishlist) => ({
  type: RECEIVE_WISHLIST,
  wishlist
});

const removeWishlist = (wishlistId) => ({
  type: REMOVE_WISHLIST,
  wishlistId
});

export const fetchWishlists = () => dispatch => {
  return WishlistUtil.fetchWishlists()
    .then((wishlists) => dispatch(receiveWishlists(wishlists)))
}

export const fetchWishlist = (wishlistId) => dispatch => {
  return WishlistUtil.fetchWishlist(wishlistId)
    .then((wishlist) => dispatch(receiveWishlist(wishlist)))
}

export const createWishlist = (wishlist) => dispatch => {
  return WishlistUtil.createWishlist(wishlist)
    .then((wishlist) => dispatch(receiveWishlist(wishlist)))
}

export const deleteWishlist = (wishlistId) => dispatch => {
  return WishlistUtil.deleteWishlist(wishlistId)
    .then(() => dispatch(removeWishlist(wishlistId)))
}