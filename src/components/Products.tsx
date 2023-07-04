import React, { useEffect, useState } from "react";
import { Product } from "../types/products";
import ProductTile from "./ProductTile";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

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

export default Products;
