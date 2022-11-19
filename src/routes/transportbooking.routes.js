const express = require("express");

const {
  addProductCart,
  getProductCarts,
  getSingleProductCart,
  updateProductCart,
  deleteProductCart,
} = require("../controllers/transportbooking.controllers");

const router = express.Router();

router.get("/get-transportbookings", getProductCarts);
router.get("/get-transportbooking/:id", getSingleProductCart);
router.post("/add-transportbooking", addProductCart);
router.patch("/update-transportbooking/:id", updateProductCart);
router.delete("/delete-transportbooking/:id", deleteProductCart);

module.exports = router;