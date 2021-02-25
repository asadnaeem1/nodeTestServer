const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.listen(PORT, () => {
  console.log(`Server Listening At ${PORT}`);
});
