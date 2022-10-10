const Supplication = require("../models/supplication.model");

//////////////////////////////////////////////////////////////////////////////
async function addSupplication(req, res) {
  const { supplicationTitle, supplication } = req.body;
  try {
    const preSupplication = await Supplication.findOne({
      supplicationTitle: supplicationTitle,
    });
    console.log(preSupplication);
    if (preSupplication) {
      res.status(404).send("This supplication already exists");
    } else {
      const addSupplication = new Supplication({
        supplicationTitle,
        supplication,
      });
      await addSupplication.save();
      res.status(201).json(addSupplication);
      console.log(addSupplication);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSupplications(req, res) {
  try {
    const supplicationsData = await Supplication.find();
    res.status(200).json(supplicationsData);
    console.log(supplicationsData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleSupplication(req, res) {
  const supplicationId = req.params.id;
  try {
    const supplicationData = await Supplication.findById(supplicationId);
    res.status(200).json(supplicationData);
    console.log(supplicationData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateSupplication(req, res) {
  try {
    await Supplication.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "Supplication Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteSupplication(req, res) {
  const supplicationId = req.params.id;
  try {
    await Supplication.findByIdAndDelete(supplicationId);
    res.status(200).json({ msg: "Supplication Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = {
  getSupplications,
  getSingleSupplication,
  addSupplication,
  updateSupplication,
  deleteSupplication,
};
