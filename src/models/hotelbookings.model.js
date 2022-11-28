const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const HotelBookingSchema = new mongoose.Schema({
  user_id: { type: Id, ref: "User"},
  status: { type: String, default: "Pending" },
  hotel:{type: Id, ref: "Hotels"},
  bookedRoom:[{
    Type:{type: String },
    Size:{type: String},
    Price:{type: Number},
    id:{type:Number,default:0},
    BookedCheckin:{type:String},
    BookedCheckout:{type:String}
  }],
  Total:{
    type:Number
  },
  paymentstatus:{
    Type:{type:String},
    AccountNo:{type:String},
  }
});

const ProductCart = new mongoose.model("HotelBooking", HotelBookingSchema);

module.exports = ProductCart;
