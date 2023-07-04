import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottom: "1px solid black",
      }}
    >
      <span>My Awesome E-Commerce</span>
      <span>{cart.length} Items in Cart</span>
    </div>
  );
}

export default NavBar;
