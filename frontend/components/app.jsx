import React from 'react';
import { Route, Switch} from 'react-router-dom';
import StorefrontContainer from './storefront/storefront_container'
import GamePage from './game/game_container'
import GlobalFooter from './footer/footer'
import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
import WishlistContainer from './wishlist/wishlist_container';
import CartItemsContainer from './cart_items/cart_items_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="full-page">
    <Modal />
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={StorefrontContainer} />
      <Route path="/games/:gameId" component={GamePage} />
      <Route path="/wishlists" component={WishlistContainer} />
      <Route path="/cart_items" component={CartItemsContainer} />
    </Switch>
    <GlobalFooter />
  </div>
);

export default App;