const ProductCart = require("../models/HolyPlaces");

//////////////////////////////////////////////////////////////////////////////
async function addProductCart(req, res) {

  const { distances } = req.body;
  try {
    console.log("sahs",distances)
   // const preProductCart = await ProductCart.findOne({ _id: req.body._id });
    //if (preProductCart) {
    //  res.status(404).send("This Booking already exists");
      //const addProductCart = new ProductCart({
      //  bookedRoom,Total 
     // });
      await ProductCart.create({distances})
    //  await addProductCart.save();
      res.status(201).json(addProductCart);
      console.log(addProductCart);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getProductCarts(req, res) {
  try {
    const productCartsData = await ProductCart.find().exec();
    res.status(200).json(productCartsData);
    console.log(productCartsData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleProductCart(req, res) {
  const productCartId = req.params.id;
  try {
    const productCartData = await ProductCart.findById(productCartId)
    res.status(200).json(productCartData);
    console.log(productCartData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateProductCart(req, res) {
  try {
    await ProductCart.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "ProductCart Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteProductCart(req, res) {
  const productCartId = req.params.id;
  try {
    await ProductCart.findByIdAndDelete(productCartId);
    res.status(200).json({ msg: "ProductCart Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getProductCarts,
  getSingleProductCart,
  addProductCart,
  updateProductCart,
  deleteProductCart,
};
