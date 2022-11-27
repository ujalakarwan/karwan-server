const { path } = require("express/lib/application");
const Product = require("../models/Hotels.model");

//////////////////////////////////////////////////////////////////////////////
async function addHotel(req, res) {
 const { Name, Location, Description, Facilities, images,Room,distances } = req.body;
  try {
    const preProduct = await Product.findOne({ _id: req.body._id });
    console.log(preProduct);
    if (preProduct) {
      res.status(404).send("This product already exists");
    } else {
      const addProduct = new Product(
       {
        Name, Location, Description, Facilities, images,Room,distances
       }
      );
      await addProduct.save();
      res.status(201).json(addProduct);
      console.log(addProduct);
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
    console.log(productsData);
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
    console.log(productData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateHotel(req, res) {
  try {
    console.log("cfhgfh",req.params)
    await Product.findByIdAndUpdate({_id:req.params.id}, req.body);
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
