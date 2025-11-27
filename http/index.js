const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `\n${Date.now()} ${req.method} ${req.url}: Request Received\n`; 
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
    fs.appendFile("log.txt", log, ()=>{
        switch(myUrl.pathname){
            case "/":
                if(req.method==="GET")
                    res.end("You are on Home Page");
                else if(req.method==="POST")
                    //DB Query
                    res.end("this is a signup page");
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
server.listen(5001, ()=> {console.log("Server is Running...") } );