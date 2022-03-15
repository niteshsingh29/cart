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
          id:1
        },
        {
          price: 1999,
          qty: 1,
          title: "Watch",
          img: "",
          id:2
        },
        {
          price: 12999,
          qty: 1,
          title: "Laptop",
          img: "",
          id:3
        },
        {
            price: 500,
            qty: 1,
            title: "Iphone",
            img: "",
            id:4
          },
          {
            price: 21999,
            qty: 1,
            title: "Macbook",
            img: "",
            id:5
          },
          {
            price: 5999,
            qty: 1,
            title: "Washing machine",
            img: "",
            id:6
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
          return <Cartitem product={product} key={product.id}/>;
        })}
      </div>
    );
  }
}
export default Cart;
