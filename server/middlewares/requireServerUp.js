const status = require("minecraft-server-status");
const keys = require("../config/keys");

module.exports = async (req, res, next) => {
  status(keys.minecraftIP, 25565, (response) => {
    if (response.online === false) {
      res.status(500);
    } else if (response.online === true) {
      next();
    }
  });
};
