import React from "react";
import { Product } from "../types/products";

interface NavBarProps {
  cart: Product[];
}

function NavBar({ cart }: NavBarProps) {
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
