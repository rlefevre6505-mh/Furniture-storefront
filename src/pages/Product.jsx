import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
// import { useState } from "react";
import { getProductById } from "../../data/data";
import "./Product.css";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const navigate = useNavigate();
  //   const [productState, setPorductState] = useState();
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === item.id);
  const productQuantity = productInCart ? `(${productInCart.quantity})` : ``;

  return (
    <div className="product-view-container">
      <img
        className="product-view-image"
        src={product.image}
        alt={product.description}
      />
      <div className="product_text">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="price_cart">
          <p className="product_price">£{product.price}</p>

          <button className="cart_button" onClick={() => addToCart(product.id)}>
            Add to Cart {`${productQuantity}`}
          </button>
        </div>
      </div>
    </div>
  );
}
