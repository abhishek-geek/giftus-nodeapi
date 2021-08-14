const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGODB_URI, PORT } = require("./utils/config");
const gifts = require("./routes/gifts");
const categories = require("./routes/categories");
const users = require("./routes/users");
// connection to the MongoDB server

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log(`connected to mongodb on port ${PORT}`);
  }
);

app.use(express.static("build"));
app.use(cors());
app.use(express.json());

app.use("/api/gifts/", gifts);
app.use("/api/categories/", categories);
app.use("/api/users/", users);

module.exports = app;
