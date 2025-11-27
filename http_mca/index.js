const express = require("express");
const app = express();
const PORT = 4000;
const userName = "Ronak";

app.get("/", (req,res)=>{
    return res.send("THis is a get request");
})

app.get("/about", (req,res)=>{
    return res.send("This is your about page");
})

app.get("/signup",(req,res)=>{
    return res.send(`Hello ${req.query.name}`);
})

app.listen(PORT, ()=> {console.log(`Server is Running on: ${PORT}`)});