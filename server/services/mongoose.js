const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log("Connected to DB");
});
