const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const Rcon = require("modern-rcon");
require("./services/mongoose");
const passport = require("passport");
require("./services/passport");

const authRouter = require("./auth/auth-routes");
const userRouter = require("./routes/users-routes");
const mcserverRouter = require("./routes/minecraft-server-routes");
const paypalRouter = require("./routes/paypal");

const server = express();
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

server.get("/", (req, res) => {
  //   rcon.send("say elowuinsa").catch((err) => console.log("nie wyslalo"));
  res.json({ message: "cipacsz" });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log("You are running on port: ", PORT);
});
