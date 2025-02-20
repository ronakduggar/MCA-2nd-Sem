const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 4000;
const server = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `\n${Date.now()} ${req.url}: Request Received\n`; 
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, ()=>{

        switch(myUrl.pathname){
            case "/":   
                res.end("You are on Home Page");
                break;
            case "/about":
                const username = myUrl.query.name;
                res.end(`Hello, ${username}`);
                break;
            case "/contact":
                res.end("Your Contact Number is: +918769101102");
                break;
            default:
                res.end("Error, Page not found.");
        }
    } )
})

server.listen(PORT, ()=> {console.log(`Server is Running on: ${PORT}`)});