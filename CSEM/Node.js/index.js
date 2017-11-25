/*Please complete the code in nodejs/index.js so that the nodejs/index.html file 
is served as a response to the following request:

GET request
URL path /foo
If the method or path does not match, 
return an HTTP response with status code 404 and show the user an error message.*/

const fs = require('fs');
const http = require('http');

const PATH = __dirname + '/index.html';

//Create a http server
let server = http.createServer((req, res) => {
    let url = req.url;
    let method = req.method;
    console.log(`${method} ${url}`);
    if (method === 'GET' && url === '/foo') {
        fs.readFile(PATH, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }else {
        res.statusCode = 404;
        res.write(`<h1>${method} ${url} not implemented.</h1>`);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening');
})