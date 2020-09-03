import React from 'react';
import { Link } from 'react-router-dom';

class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
    if(this.props.currentUser) this.props.fetchLibraries(this.props.currentUser.id);
  }

  render() {
    if(!this.props.currentUser) {
      return (
        <div>* Must be logged in to view your library</div>
      )
    }

    if (!this.props.games || !this.props.libraries) {
      return null;
    }

    const { currentUser, libraries } = this.props;
    let userLibrary = Object.values(libraries)
      .filter((library) => library.user_id === currentUser.id)
    let gameIds = userLibrary.map((library) => library.game_id)
    let games = Object.values(this.props.games)
      .filter((game) => gameIds.includes(game.id))

  }
}

export default LibraryPage;
