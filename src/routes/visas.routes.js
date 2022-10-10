const express = require("express");

const {
  getVisa,
  getSingleVisa,
  addVisa,
  updateVisa,
  deleteVisa,
} = require("../controllers/visas.controllers");

const router = express.Router();
router.get("/get-visa", getVisa);
router.get("/get-visa/:id", getSingleVisa);
router.post("/add-visa", addVisa);
router.patch("/update-visa/:id", updateVisa);
router.delete("/delete-visa/:id", deleteVisa);

module.exports = router;
