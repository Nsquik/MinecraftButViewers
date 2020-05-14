const express = require("express");
const keys = require("../config/keys");
const requireServerUp = require("../middlewares/requireServerUp");
const router = express.Router();
const status = require("minecraft-server-status");

router.get("/api/server_status", (req, res) => {
  status(keys.minecraftIP, 25565, (response) => {
    const { status, online, players } = response;
    res.json({ status, online, players });
  });
});

module.exports = router;
