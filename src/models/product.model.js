const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: [
    {
      user_id: { type: Id, ref: "User", required: true },
      comment: { type: String, required: true },
      userRating: { type: Number, required: true },
    },
  ],
  productImage: { type: String, required: true },
});

const Product = new mongoose.model("Product", ProductSchema);

module.exports = Product;
