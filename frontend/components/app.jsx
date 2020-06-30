import React from 'react';
// import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import StorefrontContainer from './storefront/storefront_container'
import GamePage from './game/game_container'
import GlobalFooter from './footer/footer'
import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    {/* <VideoModal /> */}
    <Modal />
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={StorefrontContainer} />
      <Route path="/games/:gameId" component={GamePage} />
    </Switch>
    <GlobalFooter />

  </div>
);

export default App;