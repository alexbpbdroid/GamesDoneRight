import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import VideoContainer from '../game/video_container'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let video = false;
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'video':
      component = <VideoContainer />;
      video = true;
      break;
    default:
      return null;
  }
  
  let videoReturn = <div className="video-background" onClick={closeModal}>
                      <div className="video-child" onClick={e => e.stopPropagation()}>
                        {component}
                      </div>
                    </div>
  let authReturn = <div className="modal-background" onClick={closeModal}>
                      <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {component}
                      </div>
                    </div>

  if (video){
    return videoReturn;
  } else {
    return authReturn;
  }
}


const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
