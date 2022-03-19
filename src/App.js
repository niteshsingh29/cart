import React from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import firebase from "./firebase/index";
// import "firebase/firestore";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    firebase
      .collection("products")
      .get()
      .then((snapshot) => {
        console.log(snapshot);
      });
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty = products[index].qty + 1;
    this.setState({
      products: products,
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
    const items = products.filter((item) => item.id !== id.id);
    this.setState({
      products: items,
    });
  };
  count = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((element) => {
      count += element.qty;
    });
    return count;
  };
  updateCartTotal = () => {
    const { products } = this.state;
    let count = 0;
    products.map((element) => {
      count = count + element.qty * element.price;
      return count;
    });
    return count;
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <div className="App">
          <Navbar count={this.count()} />
          <Cart
            products={products}
            onIncreaseQty={this.handleIncreaseQty}
            onDecreaseQty={this.handleDecreaseQty}
            onDeleteItem={this.handleDeleteItem}
          />
          <div className="total" style={{ fontSize: 30, margin: 30 }}>
            TOTAL: {this.updateCartTotal()}
          </div>
        </div>
      </>
    );
  }
}

export default App;
