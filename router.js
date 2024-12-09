const express = require("express");
const router = express.Router();

router.get("/users", (req, res, next) => {
  res.send("<h1>User Page<h1>");
});

router.get("/products", (req, res, next) => {
  res.send("<h1>Product Page<h1>");
});

module.exports = router;
