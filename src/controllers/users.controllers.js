const User = require("../models/user.model");

//////////////////////////////////////////////////////////////////////////////
async function addUser(req, res) {
  const { userName, email, contact, address, profilePic, password } = req.body;
  try {
    const preUser = await User.findOne({ email: email });
    console.log(preUser);
    if (preUser) {
      res.status(404).send("This user already exists");
    } else {
      const addUser = new User({
        userName,
        email,
        password,
        contact,
        address,
        profilePic,
      });
      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getUsers(req, res) {
  try {
    const usersData = await User.find();
    res.status(200).json(usersData);
    console.log(usersData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleUser(req, res) {
  const userId = req.params.id;
  try {
    const userData = await User.findById(userId);
    res.status(200).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateUser(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "User Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function updateFamily(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ msg: "User Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({ msg: "User Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteFamily(req, res) {
  const userId = req.params.id;
  try {
    var a=await User.findById(userId);
    
  //  res.status(200).json({ msg: "User Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = { getUsers, getSingleUser, addUser, updateUser, deleteUser,deleteFamily,updateFamily };
