import "./PaymentResult.css";

export default function PaymentSuccess() {
  return (
    <div className="payment-success">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <p>Your receipt will be sent to your provided email address</p>
      <a href="/" className="home-link">
        Return to Home
      </a>
    </div>
  );
}
