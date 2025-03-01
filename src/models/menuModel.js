const mongoose = require("mongoose");
const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false, default: "" },
  price: { type: Number, required: true },
  image: String,
  active: { type: Boolean },
});

module.exports = mongoose.model("Menu", MenuSchema);
