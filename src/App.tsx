import CartProvider from "./context/CartProvider";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
