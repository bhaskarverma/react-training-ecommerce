import CartProvider from "./context/CartProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

export default App;
