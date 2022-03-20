import React from "react";
import Cartitem from "./Cartitem";

const Cart = (props) => {
  const { products, loading } = props;
  return (
    <div className="cart">
      <h1> Welcome to Prolance Cart</h1>
      {products.map((product) => {
        return (
          <Cartitem
            product={product}
            key={product.id}
            onIncreaseQty={props.onIncreaseQty}
            onDecreaseQty={props.onDecreaseQty}
            onDeleteItem={props.onDeleteItem}
          />
        );
      })}
      {loading && <h1>PLease Wait Loading....</h1>}
    </div>
  );
};
export default Cart;
