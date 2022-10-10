const express = require("express");

const {
  getBookRequests,
  getSingleBookRequest,
  addBookRequest,
  updateBookRequest,
  deleteBookRequest,
} = require("../controllers/bookRequest.controllers");

const router = express.Router();

router.get("/get-bookRequests", getBookRequests);
router.get("/get-bookRequest/:id", getSingleBookRequest);
router.post("/add-bookRequest", addBookRequest);
router.patch("/update-bookRequest/:id", updateBookRequest);
router.delete("/delete-bookRequest/:id", deleteBookRequest);

module.exports = router;
