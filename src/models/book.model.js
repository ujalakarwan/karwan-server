const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookTitle: { type: String /* , required: true */ },
  book: { type: String /* , required: true */ },
});

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
