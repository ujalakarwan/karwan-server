const express = require("express");

const {
  getBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/Transanctions.controllers");

const router = express.Router();

router.get("/get-transanctions", getBooks);
router.get("/get-transanction/:id", getSingleBook);
router.post("/add-transanction", addBook);
router.patch("/update-transanction/:id", updateBook);
router.delete("/delete-transanction/:id", deleteBook);

module.exports = router;
