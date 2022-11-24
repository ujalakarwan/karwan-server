const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const HotelsSchema = new mongoose.Schema({
  Name: { type: String },
  Location: { type: String },
  GoogleLoc: { type: String },
  images: { type: String },
  Description: { type: String},
  Facilities: { type: String},
  Room:[{
    Type:{type: String },
    Size:{type: String},
    Price:{type: Number},
    id:{type:Number,default:0},
    availability:[{
        Startdate:{type: Date},
        Enddate:{type:Date},
        timeslot:[{type:String}],
    }]
  }],
  reviews: [
    {
      user_id: { type: Id, ref: "User", required: true },
      comment: { type: String, required: true },
      userRating: { type: Number, required: true },
    },
  ],
  distances: [{
    place:{type:String},
    distance:{type:String}
  }],
});

const Product = new mongoose.model("Hotels", HotelsSchema);

module.exports = Product;
