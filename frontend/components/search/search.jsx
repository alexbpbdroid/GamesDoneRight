import React from "react";
import ReactDOM from "react-dom";
import { fetchGames } from "../../actions/game_actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  render() {

    return (
      <div></div>
    )
  }
}

export default Search;