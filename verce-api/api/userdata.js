const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const userdata = require("../data/Userdata.json");

app.use(cors());

app.get("/api/userdata", (req, res) => {
  res.json(userdata);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
