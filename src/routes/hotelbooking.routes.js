const express = require("express");

const {
  addProductCart,
  getProductCarts,
  getSingleProductCart,
  updateProductCart,
  deleteProductCart,
} = require("../controllers/hotelbooking.controllers");

const router = express.Router();

router.get("/get-hotelbookings", getProductCarts);
router.get("/get-hotelbooking/:id", getSingleProductCart);
router.post("/add-hotelbooking", addProductCart);
router.patch("/update-hotelbooking/:id", updateProductCart);
router.delete("/delete-hotelbooking/:id", deleteProductCart);

module.exports = router;