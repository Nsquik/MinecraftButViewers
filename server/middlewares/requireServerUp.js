const status = require("minecraft-server-status");
const keys = require("../config/keys");

module.exports = async (req, res, next) => {
  status(keys.minecraftIP, 25565, (response) => {
    if (response.online === false) {
      res.json({ message: "Server is offline" });
    } else if (response.online === true) {
      next();
    }
  });
};
