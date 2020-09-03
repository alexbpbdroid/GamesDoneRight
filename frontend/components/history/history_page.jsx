import React from 'react';
import { Link } from 'react-router-dom';

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGames();
    if (this.props.currentUser) this.props.fetchHistories(this.props.currentUser);
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <div>* Must be logged in to view your order history</div>
      )
    }

    if (!this.props.games || !this.props.histories) {
      return null;
    }
  }
}

export default HistoryPage;