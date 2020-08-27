import { connect } from 'react-redux';
import { fetchGames } from '../../actions/game_actions';
import LibraryPage from './library_page';
import { fetchLibraries, deleteLibrary } from '../../actions/library_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.entities.games,
    libraries: state.entities.libraries,
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchLibraries: () => dispatch(fetchLibraries()),
    deleteLibrary: (libraryId) => dispatch(deleteLibrary(libraryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage)