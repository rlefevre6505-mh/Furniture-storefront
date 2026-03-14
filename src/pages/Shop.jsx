import { items } from "../../data/data.js";
import ItemCard from "../components/ItemCard.jsx";
// import { Link } from "react-router";
import "./Shop.css";

export default function ShopPage() {
  // const navigate = useNavigate();

  return (
    <div className="product-container">
      {items.map((item, i) => {
        return <ItemCard key={`item${i}`} item={item} i={i} />;
      })}
    </div>
  );
}
