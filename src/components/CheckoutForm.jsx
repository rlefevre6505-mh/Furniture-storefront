import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-complete`,
      },
      redirect: "if_required",
    });

    if (error) {
      setPaymentStatus(`Payment failed: ${error.message}`);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setPaymentStatus("Payment succeeded!");
      // Handle successful payment here (e.g., clear cart, show confirmation)
    } else {
      setPaymentStatus("Payment processing...");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={!stripe || isProcessing}
        className="checkout_button"
        style={{ marginTop: "20px" }}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </form>
  );
}
