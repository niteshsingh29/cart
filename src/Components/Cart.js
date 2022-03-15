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
          img: "https://i.expansys.net/img/b/328858/oneplus-8t-5g-dual-sim-kb2000.jpg",
          id: 1,
        },
        {
          price: 1999,
          qty: 1,
          title: "Watch",
          img: "https://th.bing.com/th/id/OIP.-s-93_zca5YpnQnYwqpeAAHaJl?pid=ImgDet&rs=1",
          id: 2,
        },
        {
          price: 12999,
          qty: 1,
          title: "Laptop",
          img: "https://www.notebookcheck-cn.com/fileadmin/Notebooks/Lenovo/Yoga_S730-13IWL/DSC_0005.JPG",
          id: 3,
        },
        {
          price: 500,
          qty: 1,
          title: "Iphone",
          img: "https://i0.wp.com/www.ultimatepocket.com/wp-content/uploads/2019/10/iphone-11-pro-max-tops-consumer-reports-smartphone-rankings.jpg?fit=800%2C601&ssl=1",
          id: 4,
        },
        {
          price: 21999,
          qty: 1,
          title: "Macbook",
          img: "https://th.bing.com/th/id/OIP.aA7n255HNMcDr-Clwh_3FQHaEo?pid=ImgDet&rs=1",
          id: 5,
        },
        {
          price: 5999,
          qty: 1,
          title: "Washing machine",
          img: "https://choicemandu-images.s3.ap-south-1.amazonaws.com/cache/catalog/CG%20digital/Washing%20Machine/25-1000x1000.jpg",
          id: 6,
        },
      ],
    };
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty = products[index].qty + 1;
    this.setState({
      product: product,
    });
  };
  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty = products[index].qty - 1;
    this.setState({
      product: product,
    });
  };
  handleDeleteItem = (id) => {
    const { products } = this.state;
    console.log(id)
    const items = products.filter((item) => item.id !== id.id);
    console.log(items)
    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        <h1> Welcome to Prolance Cart</h1>
        {products.map((product) => {
          return (
            <Cartitem
              product={product}
              key={product.id}
              onIncreaseQty={this.handleIncreaseQty}
              onDecreaseQty={this.handleDecreaseQty}
              onDeleteItem={this.handleDeleteItem}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
