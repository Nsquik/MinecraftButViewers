const express = require("express");
const router = express.Router();

const passport = require("passport");

router.get("/auth/twitch", passport.authenticate("twitch.js", { forceVerify: true }));
router.get("/auth/twitch/callback", passport.authenticate("twitch.js", { failureRedirect: "/" }), (req, res) => {
  console.log("im in callback");
  res.json({ message: "callbackero" });
});

router.get("/auth/logout", (req, res) => {
  req.logout();
  res.json({ message: "logged out" });
});

module.exports = router;
