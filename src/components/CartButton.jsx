import "./CartButton.css";
import { useParams } from "react-router";
import { useCart } from "../context/CartContext";

export default function CartButton({ props }) {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === props);
  const productQuantity = productInCart ? `(${productInCart.quantity})` : ``;

  return (
    <button className="cart_button" onClick={() => addToCart(id)}>
      Add to Cart {`${productQuantity}`}
    </button>
  );
}
