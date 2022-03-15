import React from "react";

const Cartitem = (props) => {
  const { title, price, qty, img } = props.product;
  const { product, onIncreaseQty, onDecreaseQty, onDeleteItem } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="not loaded" src={img} />
      </div>
      <div className="right-block">
        <div style={{ color: "#111", fontSize: 45 }}>{title}</div>
        <div style={styles.font}>Rs {price}</div>
        <div style={styles.font}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {}
          <img
            alt="increase"
            className="action-icons"
            src="https://as2.ftcdn.net/v2/jpg/00/70/16/29/1000_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg"
            onClick={() => onIncreaseQty(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            onClick={() => onDecreaseQty(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
            onClick={() => onDeleteItem(product)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 200,
    width: 210,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
  font: {
    fontSize: 25,
    color: "#777",
  },
};
export default Cartitem;
