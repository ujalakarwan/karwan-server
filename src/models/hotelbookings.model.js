const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const HotelBookingSchema = new mongoose.Schema({
  user_id: { type: Id, ref: "User", required: true },
  status: { type: String, default: "Pending" },
  hotel:{type: Id, ref: "Hotels", required: true },
  bookedRoom:[{
    Type:{type: String },
    Size:{type: String},
    Price:{type: Number},
    id:{type:Number,default:0},
    BookedCheckin:{type:Date},
    BookedCheckout:{type:Date}
  }],
  Total:{
    type:Number
  },

});

const ProductCart = new mongoose.model("HotelBooking", HotelBookingSchema);

module.exports = ProductCart;
