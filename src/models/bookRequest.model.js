const mongoose = require("mongoose");

const BookRequestSchema = new mongoose.Schema({
  bookRequestLink: { type: String, required: true },
  /*   email: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
  profilePic: { type: String, required: false },
  password: { type: String, required: true }, */
});

const BookRequest = new mongoose.model("BookRequest", BookRequestSchema);

module.exports = BookRequest;
