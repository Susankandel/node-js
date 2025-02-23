//Write a nodejs function to find the total mwmory of my pc

//ES5
const http = require("http")
const os = require("os");

const getTotalMemory =() => os.totalmem() / (1024 * 1024 * 1024);

console.log(getTotalMemory());

//write a nodejs application to creat a http server to print hello world

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end
    (JSON.stringify({
      data: 'Hello World!',
    }));
  });
  
  server.listen(8000);
  console.log ("Server is running on port 8000");