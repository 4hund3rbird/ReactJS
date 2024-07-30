const express = require("express");
const app = express();
const cors = require("cors");

const userdata = require("../data/Userdata.json");

app.use(cors());
app.get("/api/userdata", (req, res) => {
  res.json(userdata);
});

module.exports = app;
