const fs = require("fs");

console.log(1);

// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

fs.readFile("contacts.txt", "utf-8", (err, result) =>{
    console.log(result);
})
console.log(2);

// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

// const appendFile =  fs.appendFileSync("./test.txt", "\nTHis is the line from Append MEthod\n");

// console.log(appendFile);

// fs.statSync("./contacts.txt");