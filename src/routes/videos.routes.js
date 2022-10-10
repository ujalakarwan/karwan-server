const express = require("express");

const {
  getVideos,
  getSingleVideo,
  addVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videos.controllers");

const router = express.Router();

router.get("/get-videos", getVideos);
router.get("/get-video/:id", getSingleVideo);
router.post("/add-video", addVideo);
router.patch("/update-video/:id", updateVideo);
router.delete("/delete-video/:id", deleteVideo);

module.exports = router;
