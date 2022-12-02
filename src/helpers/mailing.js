const nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "cacfyp@gmail.com",
    pass: "wchaurlbodzacfam",
  },
  tls: {
    rejectUnauthorized: false,
  },
});



module.exports.resetPasswordMail = (email, token) => {
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Reset Password",
    html: `<p>You requested for reset password, kindly use this <a href="${process.env.REACT_APP_URL}/ResetPassword/${token}">link</a> to reset your password</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports.reportMail = (email, path) => {
  console.log("path",path)
  var mailOptions = {
    from: "cacfyp@gmail.com",
    to: email,
    subject: "Report Email",
    attachment: path,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


