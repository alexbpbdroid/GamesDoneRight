import React from "react";
import ReactDOM from "react-dom";
import { fetchGames } from "../../actions/game_actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      searching: false,
      searchResults: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ 
      searchField: e.target.value,
      searching: true
    })
  }

  handleSearch(e) {
    this.setState({
      searchResults: this.props.games.filter((game) =>
        game.title.toLowerCase().includes(this.state.searchField.toLowerCase())
      )
    })
  }

  handleReset(e) {
    this.setState({ 
      searchField: "",
      searchResults: [],
      searching: false
    })
  }

  render() {

    let searchResults;

    if (this.props.games) {
      searchResults = this.state.searchResults.map((searchResult) => {
        return (
          <div className="search-result">
            
              <div className="search-title">{searchResult.title}</div>
              <div className="search-price"> {searchResult.price}</div>
             
            
          </div>
        )
      })
    }


    return (
      <div>
        <form>
          <input type="text"
            onChange={this.handleSearch}
            value={this.state.searchField}
          />
        </form>
        <ul>{searchResults}</ul>
      </div>
    )
  }
}

export default Search;