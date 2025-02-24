//express server
//nodemodule
//node architecture

// Write a nodejs function to read the content from the file and show in browser

const fs = require("fs");
const http = require("http");
const crypto = require("crypto");



// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {
//         "content-type": "application/json"
//     });
//     const data = fs.readFileSync(`./text.txt`).toString();
//     res.end(`The content of the file are : ${result}`);
// })

// server.listen(8000);
// console.log("Server is running on http://localhost:8000");

// write a OTP generator function that generate 6 digit number
//math.random()
// crypto module from node  

const generateOTP = (digits = 6) => {
    const minNum = Math.pow(10, digits -1)
    const maxNum = Math.pow(10, digits) -1;
    const result =crypto.randomInt(minNum,maxNum)
    return result;


};

console.log(generateOTP(5));