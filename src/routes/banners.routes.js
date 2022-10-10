const express = require("express");

const {
  getBanners,
  getSingleBanner,
  addBanner,
  updateBanner,
  deleteBanner,
} = require("../controllers/banners.controllers");

const router = express.Router();

router.get("/get-banners", getBanners);
router.get("/get-banner/:id", getSingleBanner);
router.post("/add-banner", addBanner);
router.patch("/update-banner/:id", updateBanner);
router.delete("/delete-banner/:id", deleteBanner);

module.exports = router;
