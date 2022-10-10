const Book = require("../models/book.model");

//////////////////////////////////////////////////////////////////////////////
async function addBook(req, res) {
  const { bookTitle, book } = req.body;
  try {
    const preBook = await Book.findOne({
      bookTitle: bookTitle,
    });
    console.log(preBook);
    if (preBook) {
      res.status(404).send("This book already exists");
    } else {
      const addBook = new Book({
        bookTitle,
        book,
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
    const booksData = await Book.find();
    res.status(200).json(booksData);
    console.log(booksData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleBook(req, res) {
  const bookId = req.params.id;
  try {
    const bookData = await Book.findById(bookId);
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
