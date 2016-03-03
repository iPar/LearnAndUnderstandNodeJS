'use strict';


//  In which we demonstrate a very simple API with a single endpoint that only does one thing - convert an objectin into JSON data
//  and output it to the client.
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');


