import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    let authText;
    let authText2;
    let modalHeader;
    let modalButtonText;

    if (this.props.formType === 'login') {
      modalHeader = 'LOG IN'
      modalButtonText = 'LOG IN NOW'
      authText = ""
      authText2 = ""
    } else {
      modalHeader = 'SIGN-UP'
      modalButtonText = 'SIGN UP NOW'
      authText = "By signing up you acknowledge you are 16 or older and accept "
      authText2 = "GDR User Agreement & Privacy Policy."
    }

    return (
      <div>
        <div className="login-form-container">
          <div onClick={this.props.closeModal} className="close-x">x</div>
          <nav className="modal-header">
            <img src={window.logo2URL} className="logo2-icon" />{modalHeader}
          </nav>

          <form onSubmit={this.handleSubmit} className="login-form-box">
            
            {/* <br/>
            Please {this.props.formType} or {this.props.otherForm} */}
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <div className="modal-username-input">
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-username"
                />
              </div>
              <br/>
              <div className="modal-password-input">
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-password"
                />
              </div>
              <p className="auth-text">{authText}<strong>{authText2}</strong></p>
              <br/>
            </div>
              <input className="session-submit" type="submit" value={modalButtonText} />
          </form>
          <nav className="bottom-of-modal">

          </nav>
        </div>
      </div>
      
    );
  }
}

export default withRouter(SessionForm);
