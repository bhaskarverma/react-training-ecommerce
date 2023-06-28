import React, { useEffect, useState } from "react";
import { Product } from "./types/products";
import ProductTile from "./components/ProductTile";
import NavBar from "./components/NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    const newCart = cart.filter((cartProduct) => cartProduct.id !== product.id);
    setCart(newCart);
  };

  return loading ? (
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
    <div>
      <NavBar cart={cart} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return (
            <ProductTile
              key={product.id}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

//export default App;
