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
    this.handleSearch = this.handleSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleExitSearch = document.body.addEventListener('click', (e) => {
      if (!e.target.className.includes("search")) this.handleReset();
    })
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  handleSearch(e) {
    e.preventDefault();
    let query = e.target.value
    if (query.length > 0) {
      this.setState({
        searchField: e.target.value,
        searching: true,
        searchResults: this.props.games.filter((game) =>
        game.title.toLowerCase().includes(query.toLowerCase())
      )
      })
    } else {
      this.handleReset()
    }
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
          <input className="search-box" type="text"      
            onChange={this.handleSearch}
            value={this.state.searchField}
          />
        </form>
        <ul className="all-results">{searchResults}</ul>
      </div>
    )
  }
}

export default Search;