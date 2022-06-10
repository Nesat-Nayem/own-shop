const stripe = require("stripe")('sk_test_51JwOogAoCSeLW1ZZZyLXZTUYhQgmVPcA80LyA3fKsRrAcZYaoL4vdMrfshJHKPA068ze8pmrnuuZROEMBvuIMqAx00wm8Zy86I');

export default async function handler (req, res)
{
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1KXepWJFSgBrd6IPHXmeu0ni",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/dashboard/orderHistory?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}