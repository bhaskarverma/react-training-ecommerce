import React from "react";
import { useCart } from "../context/CartProvider";
import { Link } from "react-router-dom";

function NavBar() {
  const { cart } = useCart();

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
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  );
}

export default NavBar;
