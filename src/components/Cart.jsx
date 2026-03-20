// import { useEffect, useState } from "react";
// import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "../context/CartContext";
import "./Cart.css";
// import CheckoutForm from "../components/CheckoutForm";

export default function Cart({ cartHidden, setCartHidden, ref }) {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    // clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  return (
    <div
      className={cartHidden ? "cart_panel_hidden" : "cart_panel_show"}
      ref={ref}
    >
      <div className="title_container">
        <svg
          className="cart_close_icon"
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#1f1f1f"
          onClick={() => {
            setCartHidden(true);
          }}
        >
          <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
        </svg>
        <div className="container">
          <h2 className="cart_title">Cart</h2>
        </div>
      </div>
      <div className="cart_container">
        <div className="cart_items">
          {cartItems.map((item) => (
            <div key={`product${item.id}`} className="cart_item">
              <div className="cart_details1">
                <img
                  className="cart_image"
                  src={item.product.image}
                  alt={item.product.title}
                />
                <div className="cart_item_details">
                  <h4 className="cart_item_name">{item.product.title}</h4>
                  <p className="cart_item_price">{`£${item.product.price} each`}</p>
                  <p className="cart_item_total">{`Subtotal: £${(item.product.price * item.quantity).toFixed(2)}`}</p>
                </div>
              </div>
              <div className="cart_item_controls">
                <div>
                  <button
                    className="quantity_button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity_value">{item.quantity}</span>
                  <button
                    className="quantity_button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove_button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart_summary">
          <p className="cart_total">Total: £{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
