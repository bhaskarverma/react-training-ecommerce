import React, { useState } from "react";
import { Product } from "./types/products";
import ProductTile from "./components/ProductTile";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setProducts(json));

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return <ProductTile key={product.id} product={product} />;
      })}
    </div>
  );
}

export default App;
