import * as LibraryUtil from '../util/library_util';

export const RECEIVE_LIBRARIES = "RECEIVE_LIBRARIES";
export const RECEIVE_LIBRARY = "RECEIVE_LIBRARY";
export const REMOVE_LIBRARY = "REMOVE_LIBRARY";

const receiveLibraries = (libraries) => ({
  type: RECEIVE_LIBRARIES,
  libraries 
});

const receiveLibrary = (library) => ({
  type: RECEIVE_LIBRARY,
  library
});

const removeLibrary = (libraryId) => ({
  type: REMOVE_LIBRARY,
  libraryId
});

export const fetchLibraries = () => dispatch => {
  return LibraryUtil.fetchLibraries()
    .then((libraries) => dispatch(receiveLibraries(libraries)))
}

export const fetchLibrary = (libraryId) => dispatch => {
  return LibraryUtil.fetchLibrary(libraryId)
    .then((library) => dispatch(receiveLibrary(library)))
}

export const createLibrary = (library) => dispatch => {
  return LibraryUtil.createLibrary(library)
    .then((library) => dispatch(receiveLibrary(library)))
}

export const deleteLibrary = (libraryId) => dispatch => {
  return LibraryUtil.deleteLibrary(libraryId)
    .then(() => dispatch(removeLibrary(libraryId)))
}
