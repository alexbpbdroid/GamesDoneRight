import {connect} from 'react-redux';
import Storefront from './storefront';
import { fetchGame, fetchGames } from '../../util/game_util';

const mapStateToProps = ({entities: {games}}) => ({
  games: Object.values(games)
})

const mapDispatchToProps = dispatch => ({
  fetchGames: () => dispatch(fetchGames())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Storefront)