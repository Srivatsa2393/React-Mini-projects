let doStuff = function () {
    //does stuff
}

module.exports = {
    doStuff: doStuff
}

const http = require('http');

//create a server
let server = http.createServer((req, res) => {
    //Executed once per http request
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening...')
})

const http = require('http');
let server = http.createServer();

server.on('request', (req, res) => {
    //Executed once per http request, event handler is invoked whenever a request event has been received
})

//HTTP request object
const http = require('http');

let server = http.createServer((req, res) => {
    //reterive url, http method, http headers
    let url = req.url;
    let method = req.method;
    let headers = req.headers;
    console.log('URL:' , url);
    console.log('HTTP method', method);
    console.log('Headers', headers);
    res.end('pong');
});

server.listen(3000, 'localhost', () => {
    console.log('Server is listening');
});

//HTTP request object
let server = http.createServer((req, res) => {
    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('BODY', body);
    });
    res.send('pong');
})

//Express framework
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.send(req.params);
})

//Express framework middleware
const express = require('express');
const router = express.Router();
let clicks = [];

router.use('/:name', (req, res, next) => {
    if(req.params.name !== 'clicks') {
        clicks.push(req.params.name);
    }
    console.log('We have these hotel clicks: ' + clicks);
    next();
})

//GET route
router.get('/:name', (req, res) => {
    res.send('You requested hotel' + req.params.name);
})