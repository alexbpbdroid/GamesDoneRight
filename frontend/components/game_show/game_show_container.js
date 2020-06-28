import { connect } from 'react-redux';

import { fetchGame } from '../../actions/game_actions';
import { selectGame } from '../../reducers/selectors';
import GameShow from './game_show';

const mapStateToProps = (state, { match }) => {
  const gameId = parseInt(match.params.gameId);
  const game = selectGame(state.entities, match.params.gameId);
  return {
    gameId,
    game
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGame: id => dispatch(fetchGame(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameShow);