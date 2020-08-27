import { REMOVE_LIBRARY, RECEIVE_LIBRARY, RECEIVE_LIBRARIES } from '../actions/library_actions';

const librariesReducer = (oldState = {}, action) => {
  Object.freezse(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_LIBRARIES:
      return action.libraries;
    case RECEIVE_LIBRARY:
      newState[action.library.id] = action.library;
    case REMOVE_LIBRARY:
      delete newState[action.libraryId]
      return newState;
    default:
      return oldState;
  }
}

export default librariesReducer;