const Book = require("../models/wishlist.model");

//////////////////////////////////////////////////////////////////////////////
async function addBook(req, res) {
  const { user_id, product_id } = req.body;
  try {
    const preBook = await Book.findOne({
      user_id: user_id,
    });
    console.log(preBook);
    if (preBook) {
      res.status(404).send("wishlist already exists");
    } else {
      const addBook = new Book({
        user_id, product_id
      });
      await addBook.save();
      res.status(201).json(addBook);
      console.log(addBook);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getBooks(req, res) {
  try {
    const booksData = await Book.find().populate("user_id product_id")
    res.status(200).json(booksData);
    console.log("wishls",booksData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleBook(req, res) {
  const bookId = req.params.id;
  try {
    const bookData = await Book.findById(bookId).populate("user_id product_id")
    res.status(200).json(bookData);
    console.log(bookData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateBook(req, res) {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Book Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteBook(req, res) {
  const bookId = req.params.id;
  try {
    await Book.findByIdAndDelete(bookId);
    res.status(200).json({ msg: "Book Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
