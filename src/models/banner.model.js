const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  title: { type: String /* , required: true */ },
  bannerImage: { type: String, required: true },
});

const Banner = new mongoose.model("Banner", BannerSchema);

module.exports = Banner;
