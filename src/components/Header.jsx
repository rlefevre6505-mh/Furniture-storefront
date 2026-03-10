import { Link } from "react-router";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  );
}
