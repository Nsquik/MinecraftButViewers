const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
  },
  captureID: {
    type: String,
    required: false,
  },
  _user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
    required: true,
  },
  finalised: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
