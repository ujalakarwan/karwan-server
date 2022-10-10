const Visa = require("../models/visa.model");

//////////////////////////////////////////////////////////////////////////////
/* async function addVisa(req, res) {
  try {
    const preVisa = await Visa.findOne({ email: req.body.email });
    console.log(preVisa);
    if (preVisa) {
      res.status(404).send("This visa already exists");
    } else {
      const addVisa = new Visa(req.body);
      await addVisa.save();
      res.status(201).json(addVisa);
      console.log(addVisa);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
} */
async function addVisa(req, res) {
  try {
    const addVisa = new Visa(req.body);
    await addVisa.save();
    res.status(201).json(addVisa);
    console.log(addVisa);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getVisa(req, res) {
  try {
    const visaData = await Visa.find();
    res.status(200).json(visaData);
    // console.log(visaData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleVisa(req, res) {
  const visaId = req.params.id;
  try {
    const visaData = await Visa.findById(visaId);
    res.status(200).json(visaData);
    console.log(visaData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateVisa(req, res) {
  try {
    await Visa.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Visa Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteVisa(req, res) {
  const visaId = req.params.id;
  try {
    await Visa.findByIdAndDelete(visaId);
    res.status(200).json({ msg: "Visa Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = { getVisa, getSingleVisa, addVisa, updateVisa, deleteVisa };
