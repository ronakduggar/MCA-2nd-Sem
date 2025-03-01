const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req,res)=>{
    return res.send("THis is a get request");
})

app.get("/about", (req,res)=>{
    return res.send("This is your about page");
})

app.post("/signup",(req,res)=>{
    return res.send("this is your signup page")
})

app.listen(PORT, ()=> {console.log(`Server is Running on: ${PORT}`)});