import Search from "./search";
import { fetchGames } from "../../actions/game_actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    games: Object.values(state.entities.games)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: () => dispatch(fetchGames())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));