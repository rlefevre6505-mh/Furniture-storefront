import { loadStripe } from "@stripe/stripe-js";

// Use a Vite env var for the publishable key (make sure to create a .env file with VITE_STRIPE_PUBLISHABLE_KEY).
// Fallback to a hardcoded test key for quick local development.
export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51TBbvNIw6FEYqJaKHTvRVXJmJnc1lxtXMpN0IRYJNbW2Mf4rzKrK9uwH6jl7XaRfJ6lLjgaEaxaAMj6SPaINJwrl00lJp5i3zT",
);
