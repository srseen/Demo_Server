const express = require("express");
const router = require("./router");
const app = express();
const PORT = 3000;

app.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
