const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tokenSchema = new schema({
  token: { type: String },
  email: { type: String },
  expireAt: { type: Date, expires: "2m", default: Date.now },
});
module.exports = mongoose.model("Token", tokenSchema);
