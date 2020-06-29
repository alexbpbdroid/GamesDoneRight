import {
  RECEIVE_ALL_GAMES,
  RECEIVE_GAME
} from '../actions/game_actions';

const gamesReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)
  switch(action.type) {
    case RECEIVE_ALL_GAMES:
      return action.games;
    case RECEIVE_GAME:
      newState[action.game.id] =  action.game
      return newState
    default:
      return oldState;
  }
};

export default gamesReducer;