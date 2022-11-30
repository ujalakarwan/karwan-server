const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const ProductCartSchema = new mongoose.Schema({
  user_id: { type: Id, ref: "User", required: true },
  status: { type: String, default: "Pending" },
  Total:{type:Number},
  products: [
    {
      product_id: { type: Id, ref: "Product" },
      amount: { type: Number, default: 0 },
    },
  ],
  paymentstatus:{
    Type:{type:String},
    AccountNo:{type:String},
    
  }
});

const ProductCart = new mongoose.model("ProductCart", ProductCartSchema);

module.exports = ProductCart;
