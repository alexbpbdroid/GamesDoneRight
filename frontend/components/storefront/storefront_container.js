import {connect} from 'react-redux';
import Storefront from './storefront';
import { fetchGame, fetchGames } from '../../actions/game_actions';

const mapStateToProps = (state, ownProps) => ({
  games: Object.values(state.entities.games)
})

const mapDispatchToProps = dispatch => ({
  fetchGames: () => dispatch(fetchGames())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Storefront)