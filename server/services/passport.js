const passport = require("passport");
const twitchStrategy = require("passport-twitch.js").Strategy;
const keys = require("../config/keys");
const User = require("../models/User");
const callbackURL = process.env.TWITCH_CALLBACK || "/auth/twitch/callback";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new twitchStrategy(
    {
      clientID: keys.twitchClientID,
      clientSecret: keys.twitchSecret,
      callbackURL: callbackURL,
      scope: "user_read",
    },
    async (accessToken, refreshToken, profile, done) => {
      const userExists = await User.findOne({ twitchId: profile.id });
      if (userExists) {
        return done(null, userExists);
      }

      const user = await new User({
        twitchId: profile.id,
        display_name: profile.display_name,
        img: profile.profile_image_url,
      }).save();
      done(null, user);
    }
  )
);
