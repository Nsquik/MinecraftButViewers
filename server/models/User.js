const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  twitchId: {
    type: String,
    required: true,
  },
  display_name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
