const express = require("express");

const {
  getHotels,
  getSingleHotels,
  addHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotels.controllers");

const router = express.Router();
console.log("erroru")
router.get("/get-hotels", getHotels);
router.get("/get-hotel/:id", getSingleHotels);
router.post("/add-hotel", addHotel);
router.patch("/update-hotel/:id", updateHotel);
router.delete("/delete-hotel/:id", deleteHotel);

module.exports = router;
