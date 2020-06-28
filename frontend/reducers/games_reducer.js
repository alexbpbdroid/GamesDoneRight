import merge from 'lodash/merge';

import {
  RECEIVE_GAMES,
  RECEIVE_GAME
} from '../actions/game_actions';

const gamesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_GAMES:
      return action.games;
    case RECEIVE_GAME:
      const newGame = { [action.game.id]: action.game }
      return merge({}, state, newGame)
    default:
      return state;
  }
};

export default gamesReducer;