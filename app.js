const http = require('http');


const server = http.createServer((req, res) => {
    res.write("welcome");
    console.log("hi");
    res.end();
});

console.log("Hardik");

server.listen(3000)