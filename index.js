const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "public/redirect.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Node app is working!");
});
