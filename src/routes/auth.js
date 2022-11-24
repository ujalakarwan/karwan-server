const express = require("express");

const {
  Login,
  forgotpassword,
  resetPassword,
} = require("../controllers/Auth");

const router = express.Router();

router.post("/login", Login);
router.post("/reset/:id", forgotpassword);
router.post("/forgotpassword", resetPassword);


module.exports = router;
