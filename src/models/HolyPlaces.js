const mongoose = require("mongoose");

const Id = mongoose.Schema.Types.ObjectId;

const HolyPlacesSchema = new mongoose.Schema({
  distances:[
    {
      Name: { type: String },
      id:{type:Number,default:0},
      lat:{type:Number},
      lon:{type:Number}
    }
  ]
 
   
});

const Product = new mongoose.model("HolyPlaces", HolyPlacesSchema);

module.exports = Product;
