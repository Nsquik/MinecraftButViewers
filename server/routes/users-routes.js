const express = require("express");
const requireLogin = require("../middlewares/requireLogin");
const router = express.Router();

router.get("/api/current_user", requireLogin, (req, res) => {
  res.json(req.user);
});

module.exports = router;
