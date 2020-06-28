import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import StorefrontContainer from './storefront/storefront_container'
import GameShowContainer from './game_show/game_show_container'

import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Modal />
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <Route path="/games/:gameId" component={GameShowContainer} />
      <Route exact path="/" component={StorefrontContainer} />
    </Switch>
    
  </div>
);

export default App;