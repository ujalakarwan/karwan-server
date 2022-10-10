const express = require("express");

const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controllers");

const router = express.Router();

router.get("/get-products", getProducts);
router.get("/get-product/:id", getSingleProduct);
router.post("/add-product", addProduct);
router.patch("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;
