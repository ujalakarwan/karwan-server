const Video = require("../models/video.model");

//////////////////////////////////////////////////////////////////////////////
async function addVideo(req, res) {
  const { videoLink } = req.body;
  try {
    const preVideo = await Video.findOne({ videoLink: videoLink });
    console.log(preVideo);
    if (preVideo) {
      res.status(404).send("This video already exists");
    } else {
      const addVideo = new Video({
        videoLink,
      });
      await addVideo.save();
      res.status(201).json(addVideo);
      console.log(addVideo);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getVideos(req, res) {
  try {
    const videosData = await Video.find();
    res.status(200).json(videosData);
    console.log(videosData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleVideo(req, res) {
  const videoId = req.params.id;
  try {
    const videoData = await Video.findById(videoId);
    res.status(200).json(videoData);
    console.log(videoData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateVideo(req, res) {
  try {
    await Video.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Video Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteVideo(req, res) {
  const videoId = req.params.id;
  try {
    await Video.findByIdAndDelete(videoId);
    res.status(200).json({ msg: "Video Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getVideos,
  getSingleVideo,
  addVideo,
  updateVideo,
  deleteVideo,
};
