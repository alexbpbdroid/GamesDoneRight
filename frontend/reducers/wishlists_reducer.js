import { RECEIVE_WISHLISTS, RECEIVE_WISHLIST, REMOVE_WISHLIST } from '../actions/wishlist_actions';

const wishlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_WISHLISTS:
      return action.wishlists;
    case RECEIVE_WISHLIST:
      newState[action.wishlist.id] = action.wishlist;
      return newState;
    case REMOVE_WISHLIST:
      delete newState[action.wishlistId]
      return newState;
    default:
      return oldState;
  }
}

export default wishlistsReducer;