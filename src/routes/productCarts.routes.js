const express = require("express");

const {
  addProductCart,
  getProductCarts,
  getSingleProductCart,
  updateProductCart,
  deleteProductCart,
} = require("../controllers/productCarts.controllers");

const router = express.Router();

router.get("/get-productCarts", getProductCarts);
router.get("/get-productCart/:id", getSingleProductCart);
router.post("/add-productCart", addProductCart);
router.patch("/update-productCart/:id", updateProductCart);
router.delete("/delete-productCart/:id", deleteProductCart);

module.exports = router;
