import React from 'react';
import { withRouter } from 'react-router-dom';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="checkout-modal">
        <div className="checkout-content">TEST CHECKOUT MODAL RANDOM SHIT HERE</div>
      </div>
    )
  }
}

export default withRouter(Checkout);