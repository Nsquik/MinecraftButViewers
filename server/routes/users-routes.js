const express = require("express");
const requireLogin = require("../middlewares/requireLogin");
const router = express.Router();
const OrderModel = require("../models/Order");

router.get("/api/user/current", (req, res) => {
  // const { twitchId, display_name, img } = req.user;
  res.json(req.user);
});

router.get("/api/user/orders", requireLogin, async (req, res) => {
  if (req.user.id) {
    try {
      const userOrders = await OrderModel.find({ _user: req.user.id }, (err, result) => {
        res.json(result).status(200);
      });
    } catch (error) {
      console.log(error);
      res.json({ error }).status(500);
    }
  } else {
    res.json({ error: "Unauthorized", code: 401, message: "Login to access" }).status(401);
  }
});

module.exports = router;
