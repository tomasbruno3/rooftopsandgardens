import React ,{Component}from 'react'
import StripeCheckout from 'react-stripe-checkout';
import "./styleCart.css"

export default class TakeMoney extends Component {
  onToken = (token) => {

    console.log(token);
  }
  // ...
  render() {
    return (

      < StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_WL9oxOzrNIMQcUcNAkudoBq800BaehUXLY"
        className= "stripeButton"
      />
    )
  }
}
