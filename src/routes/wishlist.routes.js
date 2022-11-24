const express = require("express");

const {
  getBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/wishlist.controllers");

const router = express.Router();

router.get("/get-wishlist", getBooks);
router.get("/get-wishlist/:id", getSingleBook);
router.post("/add-wishlist", addBook);
router.patch("/update-wishlist/:id", updateBook);
router.delete("/delete-wishlist/:id", deleteBook);

module.exports = router;
