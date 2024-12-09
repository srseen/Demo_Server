const express = require("express");
const ssl = require("./ssl");
const app = express();
const PORT = 3000;

app.get("/encrypt", (req, res, next) => {
  try {
    const text = req.query.text;
    const data = ssl.encrypt(text);
    res.send(data);
  } catch (err) {
    res.send(eer);
  }
});

app.get("/decrypt", (req, res, next) => {
  try {
    const chiper = req.query.chiper;
    const iv = req.query.key;
    const text = ssl.decrypt(chiper, iv);
    res.send(text);
  } catch (err) {
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
