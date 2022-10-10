const { path } = require("express/lib/application");
const Product = require("../models/product.model");

//////////////////////////////////////////////////////////////////////////////
async function addProduct(req, res) {
  const { title, price, description, rating, productImage } = req.body;
  try {
    const preProduct = await Product.findOne({ _id: req.body._id });
    console.log(preProduct);
    if (preProduct) {
      res.status(404).send("This product already exists");
    } else {
      const addProduct = new Product({
        title,
        price,
        description,
        rating,
        productImage,
      });
      await addProduct.save();
      res.status(201).json(addProduct);
      console.log(addProduct);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getProducts(req, res) {
  try {
    const productsData = await Product.find()
      .populate({
        path: "reviews",
        populate: [{ path: "user_id" }],
      })
      .exec();
    res.status(200).json(productsData);
    console.log(productsData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleProduct(req, res) {
  const productId = req.params.id;
  try {
    const productData = await Product.findById(productId);
    res.status(200).json(productData);
    console.log(productData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateProduct(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Product Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteProduct(req, res) {
  const productId = req.params.id;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ msg: "Product Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
