const express = require("express");
const app = express();
const userName = "Ronak";

app.get("/",(req,res)=>{
    res.send("This is a Home Page");
})

app.get("/about", (req,res)=>{
    res.send(`This is your name ${userName}`);
})

app.listen(5001, ()=> {console.log("Server is Running...") } );