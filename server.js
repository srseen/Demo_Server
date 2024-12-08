const express = require("express");
const app = express();
const PORT = 3000;

app.get("/product", (req, res, next) => {
  const product = [
    { id: "1", name: "ส้ม", price: 10 },
    { id: "2", name: "มะม่วง", price: 20 },
    { id: "3", name: "มะนาว", price: 30 },
  ];
  const productString = JSON.stringify(product, undefined, 2);
  res.json(product);
});

app.get("/student", (req, res, next) => {
  const student = [
    { id: "1", name: "สมชาย", age: 10 },
    { id: "2", name: "สมหญิง", age: 10 },
  ];
  res.json(student);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
