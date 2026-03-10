import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ShopPage from "./pages/Shop";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/Product";

import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
