/* global Buffer, process */

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import Stripe from "stripe";

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const stripeSecretKey = env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    console.warn(
      "[vite] STRIPE_SECRET_KEY is not set. /create-checkout-session will fail.",
    );
  }

  const stripe = new Stripe(stripeSecretKey || "", {
    apiVersion: "2023-08-16",
  });

  const registerStripeMiddleware = (server) => {
    server.middlewares.use(async (req, res, next) => {
      if (req.method === "POST" && req.url === "/create-checkout-session") {
        try {
          const body = await getRawBody(req);
          const parsed = body.length ? JSON.parse(body.toString()) : {};
          const amount = Number(parsed.amount ?? 0);

          const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.max(0, Math.round(amount)),
            currency: "gbp",
            automatic_payment_methods: { enabled: true },
          });

          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ client_secret: paymentIntent.client_secret }));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: error?.message || "Unknown error" }));
        }
        return;
      }

      next();
    });
  };

  return {
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      }),
      {
        name: "stripe-dev-middleware",
        configureServer(server) {
          registerStripeMiddleware(server);
        },
        configurePreviewServer(server) {
          registerStripeMiddleware(server);
        },
      },
    ],
  };
});
