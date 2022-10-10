const BookRequest = require("../models/bookRequest.model");

//////////////////////////////////////////////////////////////////////////////
async function addBookRequest(req, res) {
  const { bookRequestLink } = req.body;
  try {
    const preBookRequest = await BookRequest.findOne({
      bookRequestLink: bookRequestLink,
    });
    console.log(preBookRequest);
    if (preBookRequest) {
      res.status(404).send("This book request already exists");
    } else {
      const addBookRequest = new BookRequest({
        bookRequestLink,
      });
      await addBookRequest.save();
      res.status(201).json(addBookRequest);
      console.log(addBookRequest);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getBookRequests(req, res) {
  try {
    const bookRequestsData = await BookRequest.find();
    res.status(200).json(bookRequestsData);
    console.log(bookRequestsData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleBookRequest(req, res) {
  const bookRequestId = req.params.id;
  try {
    const bookRequestsData = await BookRequest.findById(bookRequestId);
    res.status(200).json(bookRequestsData);
    console.log(bookRequestsData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteBookRequest(req, res) {
  const bookRequestId = req.params.id;
  try {
    await BookRequest.findByIdAndDelete(bookRequestId);
    res.status(200).json({ msg: "Book Request Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

async function updateBookRequest(req, res) {
  try {
    await BookRequest.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "BookRequest Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getBookRequests,
  getSingleBookRequest,
  addBookRequest,
  updateBookRequest,
  deleteBookRequest,
};
