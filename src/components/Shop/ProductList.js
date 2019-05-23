import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../../data";
import "./Product.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <div>

          <div className="container">
          <div className="section-header text-center">
            <h3>Gift Shop</h3>
            <h4>SPECIAL WINES</h4>
          </div>
            <div className="row">

              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
              
            </div>
            <div className="col-md-12 about-detail text-center">
            <div className="button-viewcart">
            <Link to="/cart">
            <a  title="Read More">View Cart</a>
            </Link>

            </div>
            </div>
          </div>

      </div>
    );
  }
}
