import { NextFunction, Request, Response } from "express";
import { CartItem } from "../../src/app/model/cart.model";
import { stripeConfig } from "../config/stripe.config";

const stripe = require("stripe")(stripeConfig.STRIPE_PRIVATE_KEY);

export const createCheckoutSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { items } = req.body;

  if (!items) {
    res.status(400).json({
      message:
        "Invalid cart credentials. First add product to cart and then click checkout.",
    });
    return;
  }

  let products = items.filter((item: CartItem) => item.quantity > 0);

  const productsFromCartForCheckout: CartItem[] | [] = products;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            fixed_amount: { amount: 0, currency: "usd" },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],

      line_items: productsFromCartForCheckout.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            images: [product.product],
          },
          unit_amount: Number(product.price) * 100,
        },
        quantity: Number(product.quantity),
      })),

      mode: "payment",
      success_url: `http://localhost:3001/success.html`,
      cancel_url: `http://localhost:3001/cancel.html`,
    });
    res.json(session);
  } catch (e) {
    next(e);
  }
};
