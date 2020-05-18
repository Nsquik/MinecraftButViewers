const paypal = require("@paypal/checkout-server-sdk");
const payPalClient = require("../services/paypalSDK");
const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");
const requireServerUp = require("../middlewares/requireServerUp");

router.post("/api/paypal/transaction", requireLogin, requireServerUp, async (req, res) => {
  //   console.log(req.body);
  const { price } = req.body.body;
  // 1.Call PayPal to set up a transaction
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: price,
        },
      },
    ],
  });

  let order;
  try {
    order = await payPalClient.client().execute(request);
  } catch (err) {
    // 2. Handle any errors from the call
    console.error(err);
    return res.send(500);
  }

  res.status(200).json({
    orderID: order.result.id,
  });
});

router.post("/api/paypal/transaction/finalise", async (req, res) => {
  const { orderID } = req.body;
  // 3. Call PayPal to capture the order

  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await payPalClient.client().execute(request);

    // 4. Save the capture ID to your database. Implement logic to save capture to your database for future reference.
    const captureID = capture.result.purchase_units[0].payments.captures[0].id;
    // await database.saveCaptureID(captureID);
  } catch (err) {
    // 5. Handle any errors from the call
    console.error(err);
    return res.send(500);
  }

  // 6. Return a successful response to the client
  res.send(200);
});

module.exports = router;
