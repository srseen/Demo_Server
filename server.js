const express = require("express");
const app = express();
const PORT = 3000;

const products = [
  { id: "1", name: "Product A", price: 100 },
  { id: "2", name: "Product B", price: 200 },
  { id: "3", name: "Product C", price: 300 },
];

app.get("/products", (req, res, next) => {
  const allProducts = JSON.stringify(products, undefined, 2);
  res.send(
    `<pre style="color: red; background-color: black;">${allProducts}</pre>`
  );
});

// กำหนดค่าให้กับตัวแปรที่ส่งมาจากคำสั่ง post คือ http://localhost:3000/order/:id/:quantity/
app.get("/order/:id/:quantity", (req, res, next) => {
  const id = req.params.id;
  const quantity = req.params.quantity;
  const product = products.find((product) => product.id === id);
  if (product) {
    res.send(
      `<h1 style="color: red;">${product.name} ===> ${quantity} piece</h1>`
    );
  } else {
    res.send("<h1 style='color: red;'>Not found any product!!!</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
