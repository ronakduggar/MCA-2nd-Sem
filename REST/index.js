const express = require("express");
const app = express();
const PORT = 4000;
const users = require("./data.json");

app.get("/users",(req,res)=>{
    const html = `<ul>
        ${users.map((user)=> `<li>${user.email}</li>`).join("")}
    </ul>`;
    return res.send(html);
})

app.get("/api/users", (req, res)=>{
     return res.json(users);
})

app.get("/api/users/:id", (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    console.log(typeof(user));
    return res.json(user);
})


app.listen(PORT,()=>{
    console.log(`Server is Running on PORT: ${PORT}`);
} )