import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
  } = useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // Call your backend to create a checkout session
      const response = await fetch(
        "https://furniture-storefront-server.onrender.com/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartItems.map((item) => ({
              price_data: {
                currency: "gbp",
                product_data: {
                  name: item.product.title,
                },
                unit_amount: Math.round(item.product.price * 100),
              },
              quantity: item.quantity,
            })),
          }),
        },
      );

      const { url } = await response.json();

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="checkout_page">
      <h2 className="checkout_title">Checkout</h2>
      <div className="checkout_container">
        {/* Cart items display */}
        <div className="checkout_items">
          <h3 className="checkout_summary">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={`product${item.id}`} className="checkout_item">
              <div className="checkout_info">
                <img
                  className="checkout_image"
                  src={item.product.image}
                  alt={item.product.title}
                />
                <div className="checkout_item_details">
                  <h4 className="checkout_item_name">{item.product.title}</h4>
                  <p className="checkout_item_price">{`Price: £${item.product.price}`}</p>
                  <p className="checkout_item_total">{`Subtotal: £${(item.product.price * item.quantity).toFixed(2)}`}</p>
                </div>
              </div>
              <div className="checkout_item_controls">
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
                {/* <p className="checkout_item_total">{`Subtotal: £${(item.product.price * item.quantity).toFixed(2)}`}</p> */}
                <button
                  className="cart_button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout_summary">
          <h5>Order Summary</h5>
          <p>Total: £{total.toFixed(2)}</p>
          {/* Stripe checkout button */}
          <button
            className="checkout_button"
            onClick={handleCheckout}
            disabled={isLoading || cartItems.length === 0}
          >
            {isLoading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}
