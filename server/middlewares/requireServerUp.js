const status = require("minecraft-server-status");
const keys = require("../config/keys");

module.exports = async (req, res, next) => {
  status("play.lemoncloud.net", 25565, (response) => {
    if (response.online === false) {
      console.error("Server is offline");
      res.sendStatus(500);
    } else if (response.online === true) {
      next();
    }
  });
};
