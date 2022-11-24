const { path } = require("express/lib/application");
const Product = require("../models/Transport.model");

//////////////////////////////////////////////////////////////////////////////
async function addHotel(req, res) {
 const { Name, Facilities, Vehicle,images } = req.body;
  try {
    const preProduct = await Product.findOne({ _id: req.body._id });
    if (preProduct) {
      res.status(404).send("This product already exists");
    } else {
      console.log("ewq.sd",req.body)
      const addProduct = new Product(
       {
        Name, Facilities, Vehicle ,images
       }
      );
      await addProduct.save();
      res.status(201).json(addProduct);
      //console.log(addProduct);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getHotels(req, res) {
  try {
    const productsData = await Product.find()
      .populate({
        path: "reviews",
        populate: [{ path: "user_id" }],
      })
      .exec();
    res.status(200).json(productsData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleHotels(req, res) {
  const productId = req.params.id;
  try {
    const productData = await Product.findById(productId);
    res.status(200).json(productData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateHotel(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Product Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteHotel(req, res) {
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
  getHotels,
  getSingleHotels,
  addHotel,
  updateHotel,
  deleteHotel,
};
