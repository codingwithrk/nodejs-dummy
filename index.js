const cors = require("cors");
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3030;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
 });
});

app.listen(port);
