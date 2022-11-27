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

const ProductCart = new mongoose.model("TransportBooking", TransportBookingSchema);

module.exports = ProductCart;
