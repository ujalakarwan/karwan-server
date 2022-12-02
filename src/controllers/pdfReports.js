//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
// Read HTML Template
const reportMail = require("../helpers/mailing");




async function sendpdf(req, res, next) {
    console.log("console",req.params.useremail)
    console.log("dataa",req.body.user)
    var html = fs.readFileSync(
      path.join(__dirname, "../pdfTemplates/synopsisReport.html"),
      "utf8"
    );
   
    var options = {
      format: "A4",
      orientation: "portrait",
      border: "10mm",
    };
    var document = {
      html: html,
      data: {
        user:req.body.user,
        family:req.body.family,
        visastatus:req.body.visastatus,
        wishlist:req.body.wishlist,
        group:req.body.group,
        orders:req.body.orders,
        hotels:req.body.hotels,
        transport:req.body.transport,
        advances:req.body.advances,
        cheques:req.body.cheques
      },
      path: `../Server/public/pdfReports/${req.body.user.email}_Report.pdf`,
    };

    pdf
      .create(document, options)
      .then((response) => {
        console.log(response);
        reportMail.reportMail(
          req.params.useremail,
          path.join(
            __dirname,
            `../public/pdfReports/${req.body.user.email}_Report.pdf`
          )
        );
       
        res.status(200).json({ message: "Generated" });
      })
      .catch((error) => {
        console.error(error);
      });
  }



  module.exports = {
   sendpdf
  };
  