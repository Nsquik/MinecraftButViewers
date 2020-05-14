const passport = require("passport");
const twitchStrategy = require("passport-twitch.js").Strategy;
const keys = require("../config/keys");

passport.use(
  new twitchStrategy(
    {
      clientID: keys.twitchClientID,
      clientSecret: keys.twitchSecret,
      callbackURL: "/auth/twitch/callback",
      scope: "user_read",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done();
    }
  )
);
