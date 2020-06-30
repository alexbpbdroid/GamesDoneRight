import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GamePage from './game';

const mapStateToProps = (state, ownProps) => ({
  game: state.games[ownProps.match.params.gameId]
})

const mapDispatchToProps = dispatch => ({
  fetchGame: (gameId) => dispatch(fetchGame(gameId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);