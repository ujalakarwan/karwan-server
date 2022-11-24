var User = require("../models/user.model");
var bcrypt = require("bcrypt");
var { createjwts } = require("../Utils/JWTs");
var Token=require("../models/token")
const resetPasswordMail = require("../helpers/mailing");
const randToken = require("rand-token");

module.exports.Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ email:Email });
    console.log("dss",user)
    if (!user) return res.status(404).json("is not a User");
    
    if (Password!=user.password) return res.status(401).json("wrong password");

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.forgotpassword=async (req, res) => {
  console.log("fasf",req.body)
  User.findOne({ Email: req.body.Email })
    .then(async (user) => {
      console.log("user",user)
      const token = randToken.generate(16);
      await Token.create({ token: token, email: user.Email });
      resetPasswordMail.resetPasswordMail(user.Email, token);
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({
        success: true,
        message: "Password reset link sent to your email",
      });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: "User Not Found" });
    });
};

module.exports.resetPassword= async (req, res) => {
  console.log("password", req.body);
  const salt = await bcrypt.genSalt(10);
  console.log("ada",req.body.password)
  const hashPassword =await  bcrypt.hash(req.body.password, salt);
      User.findOne({ Email: req.body.email }, (err, user) => {
        console.log("hello1",user)
        if (err) {
          res.setHeader("Content-Type", "application/json");
          res
            .status(500)
            .json({ success: false, message: "Link has been expired" });
        }
        
          User.updateOne(
            { _id: user._id },
            { Password:req.body.password },
            (err, result) => {
              console.log("hello3",result)

              if (err) {
                res.setHeader("Content-Type", "application/json");
                res
                  .status(500)
                  .json({ success: false, message: "Link has been expired" });
              } else {
                res.setHeader("Content-Type", "application/json");
                res
                  .status(200)
                  .json({ success: true, message: "Password Updated" });
              }
            }
          );
        
      });
    
    
    
};
module.exports.Logout = async (req, res) => {
  res.cookie("AccessTokens", "", {
    MaxAge: 0,
    httpOnly: true,
  });
  res.cookie("RefreshTokens", "", {
    MaxAge: 0,
    httpOnly: true,
  });
  res.json("logged out");
};
