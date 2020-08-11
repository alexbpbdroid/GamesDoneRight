import { combineReducers } from 'redux';
import reviewsReducer from './reviews_reducer'
import usersReducer from './users_reducer'
import gamesReducer from './games_reducer'
import wishlistsReducer from './wishlists_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  games: gamesReducer,
  reviews: reviewsReducer,
  wishlists: wishlistsReducer
})

export default entitiesReducer