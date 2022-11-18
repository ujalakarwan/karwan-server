const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const TransportSchema = new mongoose.Schema({
  Name: { type: String },
 
  Facilities: { type: String},
  Vehicle:[{
    Type:{type: String },
    Price:{type: Number},
    id:{type:Number,default:0},
    images: { type: String },
    availability:[{
        date:{type: Date},
        timeslot:[{type:String}]
    }]
  }],
  reviews: [
    {
      user_id: { type: Id, ref: "User", required: true },
      comment: { type: String, required: true },
      userRating: { type: Number, required: true },
    },
  ]
});

const Product = new mongoose.model("Transport", TransportSchema);

module.exports = Product;
