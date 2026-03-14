import { Link } from "react-router";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="branding-div">
        <div className="logo"></div>
        <h1>Stoneleaf Furninshings</h1>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        {/* <Link to="/signup">Signup</Link> */}
        <Link to="/checkout">Checkout</Link>
      </nav>
      <div></div>
    </header>
  );
}
