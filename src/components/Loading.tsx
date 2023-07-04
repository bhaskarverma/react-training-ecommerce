import React, { ReactNode } from "react";
import { Product } from "../types/products";

interface LoadingProps {
  children: ReactNode;
  products: Product[];
}

function Loading({ children, products }: LoadingProps) {
  return products.length === 0 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {" "}
        Loading{" "}
      </span>
    </div>
  ) : (
    <>{children}</>
  );
}

export default Loading;
