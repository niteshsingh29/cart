import React from "react";

const Navbar = (props) => {
  return (
    <>
      <div style={styles.nav}>
       Cart
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1647362337~hmac=e5fa1c2b949099566cbe485df3869fac"
            alt="not loaded"
          />
          <span style={styles.cartCount}>3</span>
        </div>
      </div>
    </>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
    marginRight: 20,


  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
