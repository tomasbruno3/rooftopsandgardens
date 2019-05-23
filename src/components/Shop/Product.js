import React, { Component } from "react";
import styled from "styled-components";


import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button.js";
import { ProductConsumer } from "../../context";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (



      <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="product-item">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="product--img"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} className="img-fluid" alt="Product" className="card-img-top" />
                  </Link>
                  <div className="">
                      <div className="product--action">
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "in cart" : "add to cart"}
                      </ButtonContainer>
                      </div>
                  </div>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="product--content">
            <h3 className="product--title">{title}</h3>
            <h5 className="text-blue font-italic mb-0">
              <span className="product--price">$</span>
              {price}
            </h5>
          </div>
        </div>
      </div>

    );
  }
}
