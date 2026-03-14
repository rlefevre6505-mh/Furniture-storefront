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

// export function Login() {
//   const [name, setName] = useState();

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!name.trim()) return;
//     alert("login");
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="type your name"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           ></input>
//         </label>
//       </form>
//     </div>
//   );
// }

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
        </>
      </BrowserRouter>
    </CartProvider>
  );
}
