const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  videoLink: { type: String, required: true },
  /*   email: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
  profilePic: { type: String, required: false },
  password: { type: String, required: true }, */
});

const Video = new mongoose.model("Video", VideoSchema);

module.exports = Video;
