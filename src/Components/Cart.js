import React from "react";
import Cartitem from "./Cartitem";

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 99,
          qty: 1,
          title: "Mobile - Phone",
          img: "",
        },
        {
          price: 1999,
          qty: 1,
          title: "Watch",
          img: "",
        },
        {
          price: 12999,
          qty: 1,
          title: "Laptop",
          img: "",
        },
        {
            price: 500,
            qty: 1,
            title: "Iphone",
            img: "",
          },
          {
            price: 21999,
            qty: 1,
            title: "Macbook",
            img: "",
          },
          {
            price: 5999,
            qty: 1,
            title: "Washing machine",
            img: "",
          }
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        <h1> Welcome to Prolance Cart</h1>
        {products.map((product) => {
          return <Cartitem product={product}/>;
        })}
      </div>
    );
  }
}
export default Cart;
