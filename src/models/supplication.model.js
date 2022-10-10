const mongoose = require("mongoose");

const SuplicationSchema = new mongoose.Schema({
  supplicationTitle: { type: String, required: true },
  supplication: { type: String, required: true },
  /*   email: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
  profilePic: { type: String, required: false },
  password: { type: String, required: true }, */
});

const Supplication = new mongoose.model("Supplication", SuplicationSchema);

module.exports = Supplication;
