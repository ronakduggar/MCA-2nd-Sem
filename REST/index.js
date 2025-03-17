const express = require("express");
const users = require("./data.json");
const app = express();
const PORT = 5001;

//HTML DOCUMENT
app.get("/users", (req, res) => {
    const html = `
      <ul>
          ${users.map((user) => `<li>${user.id}</li>`).join("")}
      </ul>`;
    return res.send(html);
  });

//REST API
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});
