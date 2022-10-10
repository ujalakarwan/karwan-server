const Banner = require("../models/banner.model");

//////////////////////////////////////////////////////////////////////////////
async function addBanner(req, res) {
  const { title, bannerImage } = req.body;
  try {
    const preBanner = await Banner.findOne({ title: title });
    console.log(preBanner);
    if (preBanner) {
      res.status(404).send("This banner already exists");
    } else {
      const addBanner = new Banner({
        title,
        bannerImage,
      });
      await addBanner.save();
      res.status(201).json(addBanner);
      console.log(addBanner);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getBanners(req, res) {
  try {
    const bannersData = await Banner.find();
    res.status(200).json(bannersData);
    console.log(bannersData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleBanner(req, res) {
  const bannerId = req.params.id;
  try {
    const bannerData = await Banner.findById(bannerId);
    res.status(200).json(bannerData);
    console.log(bannerData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateBanner(req, res) {
  try {
    await Banner.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Banner Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteBanner(req, res) {
  const bannerId = req.params.id;
  try {
    await Banner.findByIdAndDelete(bannerId);
    res.status(200).json({ msg: "Banner Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getBanners,
  getSingleBanner,
  addBanner,
  updateBanner,
  deleteBanner,
};
