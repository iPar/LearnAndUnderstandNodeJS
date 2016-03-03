'use strict';


//  In which we create a web server, that when a request is sent to it, it returns an HTML template from a file, replacing,
//    the '{Message}' variable within it with the 'message' variable defined within the NodeJS server code.
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {                    //  Creates a server, passing in a callback function.

    res.writeHead(200, { 'Content-Type': 'text/html' });  //  Sends '200' ok message with header object indicating type of data sent.
    var html = fs.readFileSync(__dirname + '/60-index.htm', 'utf8');  //  Synchronously reads template file, in 'utf8' string format.
    var message = 'Joy to the world!!! All the boys and girls!! Joy to the fishes in the deep blue sea. Joy to you and me...';
    html = html.replace('{Message}', message);  //  Does a string replace on '{Message}' variable in template, sending 'message'.
    res.end(html);                              //  Sends the HTML response to the requesting connection.

}).listen(1337, '127.0.0.1'); //  Sets the port that this NodeJS program will be listening on.

