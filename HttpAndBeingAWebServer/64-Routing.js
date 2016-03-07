'use strict';


//  In which we demonstrate a simple API with routing - i.e. sending a different response depending on what url was received.
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/61-index.htm').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');



