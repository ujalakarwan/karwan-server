const mongoose = require("mongoose");
const Id = mongoose.Schema.Types.ObjectId;

const TransactionSchema = new mongoose.Schema({
  Transaction_id: { type: String /* , required: true */ },
  user_id: {type: Id, ref: "User" /* , required: true */ },
  order_type:{type:String},
  order_id:{type: Id},
  Amount:{type:Number},
  TransanctionStatus:{type:String},
  currency:{type:String}
});

const Book = new mongoose.model("Transaction", TransactionSchema);

module.exports = Book;
