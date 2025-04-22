const express = require("express");
const users = require("./data.json");
const fs = require("fs");
const app = express();
const PORT = 5001;

//MiddleWare
app.use(express.urlencoded({extended: false}));

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

app.route("/api/users/:id")
  .get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    return res.json(user);
  })
  .patch((req,res)=>{
    return res.json({status:"pending"});
  })
  .delete((req,res)=>{
    return res.json({status:"This is pending"});
  })

app.post("/api/users",(req,res)=>{
  const body = req.body;
  users.push({...body, id: users.length+1});
  fs.writeFile('./data.json', JSON.stringify(users),(err, data)=>{
    res.json({status:"Sent"});
  })
})

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});
