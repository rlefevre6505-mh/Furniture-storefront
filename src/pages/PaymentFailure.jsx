import "./PaymentResult.css";

export default function PaymentSuccess() {
  return (
    <div className="payment-success">
      <h2>Payment Failed</h2>
      <p>
        Confirmation of the failed payment will be sent to your provided email
        address
      </p>
      <a href="/" className="home-link">
        Return to Home
      </a>
    </div>
  );
}
