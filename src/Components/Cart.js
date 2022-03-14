import React from "react";
import Cartitem from "./Cartitem";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
      <h1> Welcome to Prolance Cart</h1>
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
      </div>
    );
  }
}
export default Cart;
