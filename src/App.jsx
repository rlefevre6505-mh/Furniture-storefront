import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ShopPage from "./pages/Shop";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/Product";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import CartProvider from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          |
        </>
      </BrowserRouter>
    </CartProvider>
  );
}
