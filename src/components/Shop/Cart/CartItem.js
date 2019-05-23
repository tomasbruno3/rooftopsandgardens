import React, { Component } from "react";
import "./styleCart.css"
export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
        <div className="product-item">
          <span className="d-lg-none"></span> {title}
        </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <div className="product-price">
            <span className="d-lg-none"></span> ${price}
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">

              <span
                className="btn btn-black mx-2"
                onClick={() => {
                  return decrement(id);
                }}
              >
                -
              </span>
              <span className="countNumber">{count}</span>
              <span
                className="btn btn-black mx-2"
                onClick={() => {
                  return increment(id);
                }}
              >
                +
              </span>

          </div>
        </div>
        <div className="col-10 mx-center col-lg-2 ">

          <div className="cart-icon" onClick={() => removeItem(id)}>
          <img src="assets/images/trash-alt-solid.svg" alt="icon"/>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>item total : ${total} </strong>
        </div>
      </div>
    );
  }
}
