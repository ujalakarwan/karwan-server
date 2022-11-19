const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const TransportBookingSchema = new mongoose.Schema({
  user_id: { type: Id, ref: "User", required: true },
  status: { type: String, default: "Pending" },
  Transport:{type: Id, ref: "Transport", required: true },
  bookedVehicle:[{
    Type:{type: String },
    Price:{type: Number},
    id:{type:Number,default:0},
    BookedCheckin:{type:Date},
    BookedCheckout:{type:Date}
  }],
  Total:{
    type:Number
  },

});

const ProductCart = new mongoose.model("TransportBooking", TransportBookingSchema);

module.exports = ProductCart;
