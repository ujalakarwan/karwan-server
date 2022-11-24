const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const WishlistSchema = new mongoose.Schema({
  user_id: { type: Id, ref: "User", required: true },
  product_id: [{ type: Id, ref: "Product", required: true }],
});

const Book = new mongoose.model("Wishlist", WishlistSchema);

module.exports = Book;
