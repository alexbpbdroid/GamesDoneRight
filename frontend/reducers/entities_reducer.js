import { combineReducers } from 'redux';
import reviewsReducer from './reviews_reducer'
import usersReducer from './users_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  reviews: reviewsReducer
})

export default entitiesReducer