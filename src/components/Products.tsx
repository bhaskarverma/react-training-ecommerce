import React, { useEffect, useState } from "react";
import { Product } from "../types/products";
import ProductTile from "./ProductTile";
import Loading from "./Loading";

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
    <Loading products={products}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return <ProductTile key={product.id} product={product} showButton />;
        })}
      </div>
    </Loading>
  );
}

export default Products;
