import NavBar from "./components/NavBar";
import CartProvider from "./context/CartProvider";
import Loading from "./context/Loading";
import Products from "./components/Products";

function App() {
  return (
    <Loading>
      <CartProvider>
        <NavBar />
        <Products />
      </CartProvider>
    </Loading>
  );
}

export default App;
