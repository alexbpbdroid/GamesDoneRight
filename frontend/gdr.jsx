//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { fetchCartItems, createCartItems, deleteCartItem} from './actions/cart_item_actions'

import {fetchReviews, fetchReview, createReview, updateReview, deleteReview} from './actions/review_actions'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  //WINDOW TESTING

  window.fetchReviews = fetchReviews;
  window.fetchReview = fetchReview;
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;
  window.fetchCartItems = fetchCartItems;
  window.createCartItems = createCartItems;
  window.deleteCartItem = deleteCartItem;
  window.dispatch = store.dispatch;

});