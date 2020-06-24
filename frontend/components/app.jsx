import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal';

import NavBarContainer from './navbar/navbar_container';
// import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      {/* <Link to="/" className="header-link">
        <h1>GDR.com</h1> 
      </Link> */}
      <NavBarContainer />
    </header>
    <Switch>
      
    
    </Switch>
  </div>
);

export default App;