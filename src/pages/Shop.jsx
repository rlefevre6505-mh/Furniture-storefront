import { items } from "../../data/data.js";
import ItemCard from "../components/ItemCard.jsx";
import { useState } from "react";
// import { Link } from "react-router";
import "./Shop.css";

export default function ShopPage() {
  const [view, setView] = useState([]);
  // const navigate = useNavigate();

  return (
    <>
      <div className="shop_filters">
        <select></select>
      </div>

      <div className="product-container">
        {items.map((item, i) => {
          return <ItemCard key={`item${i}`} item={item} i={i} />;
        })}
      </div>
    </>
  );
}
