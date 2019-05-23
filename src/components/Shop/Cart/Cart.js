import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../../context";
import EmptyCart from "./EmptyCart";



 class Store extends Component {


  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div>
                  <div className="section-header text-center">
                    <h3>Your Cart</h3>
                    <h4>SPECIAL WINES</h4>
                  </div>

                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />



                </div>


              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Store;
