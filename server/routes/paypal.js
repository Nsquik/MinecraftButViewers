const paypal = require("@paypal/checkout-server-sdk");
const payPalClient = require("../services/paypalSDK");
const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");
const requireServerUp = require("../middlewares/requireServerUp");
const OrderModel = require("../models/Order");

router.post("/api/paypal/transaction", requireLogin, requireServerUp, async (req, res) => {
  const { price, quantity, item, type, priceOne } = req.body.body;
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
    await new OrderModel({
      orderID: order.result.id,
      captureID: null,
      _user: req.user.id,
      type: type.eng,
      quantity: quantity,
      item: item,
      price: price,
      paid: false,
      finalised: false,
    }).save();
  } catch (err) {
    // 2. Handle any errors from the call
    console.error(err);
    return res.sendStatus(500);
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

    const captureID = capture.result.purchase_units[0].payments.captures[0].id;
    const existingOrder = await (
      await OrderModel.findOneAndUpdate({ orderID: orderID }, { paid: true, captureID: captureID })
    ).save();
  } catch (err) {
    // 5. Handle any errors from the call
    console.error(err);
    return res.send(500);
  }

  // 6. Return a successful response to the client
  res.sendStatus(200);
});

module.exports = router;
