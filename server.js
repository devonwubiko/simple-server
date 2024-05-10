
const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(5000, "localhost", () => {

    console.log("Server Running")
});

