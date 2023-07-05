import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product as ProductType } from "../types/products";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>({} as ProductType);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <img src={product.image} alt={product.title} height={50} width={50} />
      <span>{product.title}</span>
      <div>{product.description}</div>
      <div
        style={{
          display: "flex",
          gap: 30,
        }}
      >
        <div>{product.rating?.rate}</div>
        <div>Rs.{product.price}</div>
      </div>
    </div>
  );
}

export default Product;
