import React from "react";
import { Link } from 'react-router-dom';

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
        <Link key={searchResult.id} to={`/games/${searchResult.id}`} onClick={() => this.handleReset()}>
          <div className="search-result">
            <img className="search-thumbnail" src={searchResult.photoUrls[2]} alt="" />
            <div className="search-title-price">
              <div className="search-title">{searchResult.title}</div>
              <div className="search-price"> {searchResult.price}</div>
            </div>
          </div>
        </Link>
      )
    })
    
    return (
      <div className="outer-search-container">
        <span id="search-icon" className="material-icons">search</span>
        <div className="form-and-results">
          <form className="search-form">
            <input className="search-box" type="text"      
              onChange={this.handleSearch}
              value={this.state.searchField}
            />
          </form>
          <div className="all-results">{searchResults}</div>
        </div>
      </div>
    )
  }
}

export default Search;