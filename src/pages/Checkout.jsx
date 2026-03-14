import { useCart } from "../context/CartContext";
import "./Checkout.css";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal();

  function placeOrder() {
    alert("order placed");
    clearCart();
  }

  return (
    <div className="chackout_page">
      <div className="container">
        <h2 className="chackout_title">Checkout</h2>
        <div className="checkout_container">
          <div className="checkout_items">
            <h3 className="checkout_summary">Order Summary</h3>
            {cartItems.map((item) => (
              <div key={`product${item.id}`} className="checkout_item">
                <img
                  className="checkout_image"
                  src={item.product.image}
                  alt={item.product.title}
                />
                <div className="checkout_item_details">
                  <h4 className="checkout_item_name">{item.product.title}</h4>
                  <p className="checkout_item_price">{`£${item.product.price} each`}</p>
                </div>
                <div className="checkout_item_controls">
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
                  <p className="checkout_item_total">{`£${(item.product.price * item.quantity).toFixed(2)}`}</p>
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
          </div>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
