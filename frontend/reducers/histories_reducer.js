import { REMOVE_HISTORY, RECEIVE_HISTORY, RECEIVE_HISTORIES } from '../actions/history_actions';

const historiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_HISTORIES:
      return action.histories;
    case RECEIVE_HISTORY:
      newState[action.history.id] = action.history;
    case REMOVE_HISTORY:
      delete newState[action.historyId]
      return newState;
    default:
      return oldState;
  }
}