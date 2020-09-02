import { connect } from 'react-redux';
import { fetchGames } from '../../actions/game_actions';
import HistoryPage from './history_page';
import { fetchHistories, deleteHistory } from '../../actions/history_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.entities.games,
    histories: state.entities.histories,
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchHistories: () => dispatch(fetchHistories()),
    deleteHistory: (historyId) => dispatch(deleteHistory(historyId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)
