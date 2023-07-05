import React, { ReactNode, createContext, useContext, useState } from "react";
import CartContextType from "../types/cart_context";
import { Product } from "../types/products";

const defaultContext: CartContextType = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext<CartContextType>(defaultContext);

interface CartProviderProps {
  children: ReactNode;
}

function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    const newCart = cart.filter((cartProduct) => cartProduct.id !== product.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export { useCart };
