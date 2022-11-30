const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  profilePic: { type: String, required: false },
  password: { type: String, required: true },
  family:[{
    name:{type:String},
    contact:{type:String},
    relation:{type:String},
  }],
  RegisterationDate:{type:String},
  location:{
    lat:{type:Number},
    lon:{type:Number}
  },
  locationTime:{
    Time:{type:String},
    Date:{type:String}
  },
  AdditionalCharges:[{
    Type:{type:String},
    Number:{type:String},
    Date:{type:String},
    id:{type:Number},
    Description:{type:String},
    Amount:{type:Number}
  }]
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;
