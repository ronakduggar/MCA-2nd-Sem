const express = require("express");
const users = require("./data.json");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");
const { type } = require("os");
const PORT = 9000;

//Connection
mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
  console.log("MongoDB is Connected");
});

//Schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

//Model
const userModel = mongoose.model("user", userSchema);

//MiddleWare
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("This is a Middleware 1");
  // res.send({ msg: "You are not Authorized to acces this Server" });
  next();
});

app.use((req, res, next) => {
  console.log("This is a Middleware 2");
  next();
  // res.end("You are not Authorized to acces this Server");
});

//HTML DOCUMENT
app.get("/users", (req, res) => {
  const html = `
      <ul>
          ${users.map((user) => `<li>${user.email}</li>`).join("")}
      </ul>`;
  return res.send(html);
});

//REST API
app.get("/api/users", (req, res) => {
  res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "This is pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "The user has been Created" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});
