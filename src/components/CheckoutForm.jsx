import { useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Redirect back to the same page after payment.
        return_url: window.location.href,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message || "An unexpected error occurred.");
    } else {
      setMessage("Payment succeeded!");
      onSuccess?.();
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={{ layout: "accordion" }} />
      <button type="submit" disabled={isProcessing || !stripe || !elements}>
        {isProcessing ? "Processing…" : "Pay"}
      </button>
      {message ? <div className="checkout_message">{message}</div> : null}
    </form>
  );
};

export default CheckoutForm;
