const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const searchText = req.query.q;
  const orderby = req.query.orderby;
  console.log(searchText, orderby);
  res.send(`<h1>Search: ${searchText} Orderby: ${orderby}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
