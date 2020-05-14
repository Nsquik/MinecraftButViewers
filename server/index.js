const express = require("express");
const Rcon = require("modern-rcon");
const status = require("minecraft-server-status");
const passport = require("passport");
require("./services/passport");

const authRouter = require("./auth/auth-routes");

// status("2b2t.org", 25565, (response) => {
//   console.log(response);
// });

// const rcon = new Rcon("localhost", "passwd");

// rcon
//   .connect()
//   .then(() => {
//     return rcon.send("say cipacz").catch((err) => console.log("nie wyslalo")); // That's a command for Minecraft
//   })
//   .catch((err) => console.log("jebło"));

const server = express();

server.use(authRouter);
server.use(passport.initialize());

server.get("/", (req, res) => {
  //   rcon.send("say elowuinsa").catch((err) => console.log("nie wyslalo"));
  res.json({ message: "cipacsz" });
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log("You are running on port: ", PORT);
});
