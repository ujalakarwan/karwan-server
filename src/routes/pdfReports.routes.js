const express = require("express");

const {
  sendpdf
} = require("../controllers/pdfReports");

const router = express.Router();
router.post("/generate-and-send-synopsis/:useremail",sendpdf);


module.exports = router;
