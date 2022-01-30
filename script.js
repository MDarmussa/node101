
//creating a basic server
const http = require("http"); // http is built in module ; import code node "http" module. Allows to creat server

const hostname = "127.0.0.1";

const port = 3000;
//req: require; res: response // they both are node method, must be there
const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader("content-type", "text/plain");
     res.end("Hello Node");
});

server.listen(port, hostname,  () => {
     console.log(`Server is running at http://${hostname}:${port}`)
});
