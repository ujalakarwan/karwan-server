const express = require("express");

const {
  addProductCart,
  getProductCarts,
  getSingleProductCart,
  updateProductCart,
  deleteProductCart,
} = require("../controllers/holyplaces.controllers");

const router = express.Router();

router.get("/get-holyplaces", getProductCarts);
router.get("/get-holyplaces/:id", getSingleProductCart);
router.post("/add-holyplace", addProductCart);
router.patch("/update-holyplace/:id", updateProductCart);
router.delete("/delete-holyplace/:id", deleteProductCart);

module.exports = router;