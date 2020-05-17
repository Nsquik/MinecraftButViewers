const express = require("express");
const requireLogin = require("../middlewares/requireLogin");
const router = express.Router();

router.get("/api/current_user", (req, res) => {
  // const { twitchId, display_name, img } = req.user;
  res.json(req.user);
});

module.exports = router;
