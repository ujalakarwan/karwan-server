const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const TransportSchema = new mongoose.Schema({
  Name: { type: String },
  images: { type: String },
  Facilities: { type: String},
  Vehicle:[{
    Type:{type: String },
    Price:{type: Number},
    id:{type:Number,default:0},
    availability:[{
      Startdate:{type:String},
      Enddate:{type:String},
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
