const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PORT = 8000;

app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.cookie("name", "Ronak");
//   res.send("Welcome to the Auth Service");
// });

// app.get("/getcookie", (req, res) => {
//   const cookies = req.cookies;
//   console.log(cookies);
//   res.send(cookies);
// });

// app.get("/", (req, res) => {
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("Yipieeee", salt, function (err, hash) {
//       console.log(hash);
//     });
//   });
// });

// app.get("/verify", (req, res) => {
//   const hash = "$2b$10$adknhKQFHeenoPSrzgiD8uNIxlvJszAavRK3LyTmNIKqv89hg9XQC";
//   bcrypt.compare("Yipieeee", hash, function (err, result) {
//     console.log(result);
//   });
// });

app.get("/", (req, res) => {
  jwt.sign({ email: "ronak@gmail.com" }, "secret", (err, token) => {
    res.cookie("auth-token", token);
    console.log(token);
    res.send("Token generated and set in cookie");
  });
});

app.listen(PORT, () => {
  console.log(`Auth Service is running on http://localhost:${PORT}`);
});
