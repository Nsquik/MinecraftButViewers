const express = require("express");
const router = express.Router();

const passport = require("passport");

router.get("/auth/twitch", passport.authenticate("twitch.js", { forceVerify: true }));
router.get("/auth/twitch/callback", passport.authenticate("twitch.js"), (req, res) => {
  res.redirect("/");
});

router.get("/auth/logout", (req, res) => {
  req.logout();
  res.json({ message: "logged out" });
});

module.exports = router;
