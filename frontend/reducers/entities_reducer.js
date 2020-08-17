import { combineReducers } from 'redux';
import reviewsReducer from './reviews_reducer'
import usersReducer from './users_reducer'
import gamesReducer from './games_reducer'
import wishlistsReducer from './wishlists_reducer'
import cartItemsReducer from './cart_items_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  games: gamesReducer,
  reviews: reviewsReducer,
  wishlists: wishlistsReducer,
  cartItems: cartItemsReducer
})

export default entitiesReducer