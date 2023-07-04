import { Product } from "./products";

export default interface CartContext {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}
