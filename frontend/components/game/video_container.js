import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import Video from './video';
import {withRouter} from 'react-router'

const mapStateToProps = ({ entities: { games } }, ownProps) => {
  return {
    game: games[parseInt(ownProps.location.pathname.slice(7))]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: (gameId) => dispatch(fetchGame(gameId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));
