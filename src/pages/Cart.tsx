import React from "react";
import { useCart } from "../context/CartProvider";
import ProductTile from "../components/ProductTile";

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
