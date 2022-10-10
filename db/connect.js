require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to MongoDB Successful"))
  .catch((err) => console.log(err));
