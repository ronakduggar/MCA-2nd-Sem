const express = require("express");
const users = require("./data.json");
const app = express();
const PORT = 5001;

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

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
})


app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});
