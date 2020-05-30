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

// const minecraftRcon = require("./services/minecrafftRcon").initialize("localhost", "haslo123");

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

if (process.env.NODE_ENV === "production") {
  const path = require("path");

  server.use(express.static(path.resolve(__dirname, "../client/build")));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

ioServer.listen(PORT, () => {
  console.log("You are listenin to port: ", PORT);
});
