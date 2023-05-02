const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 5000;
const allData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello server is running!");
});
app.get("/allData", (req, res) => {
  res.send(allData);
});
app.get("/allData/:id", (req, res) => {
  const id = req.params.id;
  const selected = allData.find((data) => data.id == id);
  res.send(selected);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
