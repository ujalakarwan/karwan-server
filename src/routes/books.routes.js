const express = require("express");

const {
  getBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controllers");

const router = express.Router();

router.get("/get-books", getBooks);
router.get("/get-book/:id", getSingleBook);
router.post("/add-book", addBook);
router.patch("/update-book/:id", updateBook);
router.delete("/delete-book/:id", deleteBook);

module.exports = router;
