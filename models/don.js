const mongoose = require("mongoose");

const donSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  street: { type: String },
  cp: { type: Number },
  city: { type: String },
  amount: { type: Number },
  amountdate: { type: Date },
  edited: { type: Boolean, default: false },
  editionnumber: { type: String },
});

module.exports = mongoose.model("Don", donSchema);
