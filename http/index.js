const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `\n${Date.now()} ${req.url}: Request Received\n`; 
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
    fs.appendFile("log.txt", log, ()=>{
        switch(myUrl.pathname){
            case "/":
                res.end("You are on Home Page");
                break;
            case "/about":
                const username = myUrl.query.name;
                res.end(`Hello, ${username}`);
                break;
            case "/search":
                const search=(`search,${search}`)
            default:
                res.end("Error, Page not found.");
        }
    } )
})
server.listen(8000, ()=> {console.log("Server is Running...") } );