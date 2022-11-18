const express = require("express");

const {
  getHotels,
  getSingleHotels,
  addHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/transport.controllers");

const router = express.Router();
console.log("erroru")
router.get("/get-transports", getHotels);
router.get("/get-transport/:id", getSingleHotels);
router.post("/add-transport", addHotel);
router.patch("/update-transport/:id", updateHotel);
router.delete("/delete-transport/:id", deleteHotel);

module.exports = router;
