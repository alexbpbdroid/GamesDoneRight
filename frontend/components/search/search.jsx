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
    this.handleSearch();
  }

  handleSearch() {
    this.setState({
      searchResults: this.props.games.filter((game) =>
        game.title.toLowerCase().includes(this.state.searchField.toLowerCase())
      )
    })
  }

  handleReset() {
    this.setState({ 
      searchField: "",
      searchResults: [],
      searching: false
    })
  }

  render() {

    let searchResults = this.state.searchResults.map((searchResult) => {
      return (
        <div className="search-result" key={searchResult.id}>
            <div className="search-title">{searchResult.title}</div>
            <div className="search-price"> {searchResult.price}</div>
        </div>
      )
    })
    


    return (
      <div>
        <form>
          <input type="text"
            onChange={this.handleChange}
            value={this.state.searchField}
          />
        </form>
        <ul className="all-results">{searchResults}</ul>
      </div>
    )
  }
}

export default Search;