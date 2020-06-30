import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GamePage from './game';
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = ({ entities: { games }}, ownProps) => ({
  game: games[ownProps.match.params.gameId]
})

const mapDispatchToProps = dispatch => ({
  fetchGame: (gameId) => dispatch(fetchGame(gameId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);