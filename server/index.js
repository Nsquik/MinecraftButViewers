const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./services/mongoose");
const passport = require("passport");
require("./services/passport");

const authRouter = require("./auth/auth-routes");
const userRouter = require("./routes/users-routes");
const mcserverRouter = require("./routes/minecraft-server-routes");
const paypalRouter = require("./routes/paypal");

const server = express();
const ioServer = require("http").createServer(server);
const io = require("./services/io").initialize(ioServer);

server.use(bodyParser.json());

server.use(
  cookieSession({
    maxAge: 1000 * 60 * 60,
    keys: [keys.cookieKey],
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use(authRouter);
server.use(userRouter);
server.use(mcserverRouter);
server.use(paypalRouter);

const PORT = 5000;

ioServer.listen(PORT, () => {
  console.log("You are listenin to port: ", PORT);
});
