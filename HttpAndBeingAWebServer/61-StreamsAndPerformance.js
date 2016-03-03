'use strict';


/*  In which we make a more performant web server by using a stream (rather than synchronous file reads), piping the stream directly
    into the response object 'res'.  As we get a chunk of data from the file, it gets piped out.  And since a TCP/IP connection is a
    stream which is already sent it chunks, the browser on the client is already used to data coming a chunk at a time and processing
    it once downloaded (or as it is downloading).  Thus, since streams are already fundamental to how the internet works anyway, this
    works perfectly.  Note that in order to replace the '{Message}' variable in this exercise, we would need to create our own custom
    stream to pipe the file stream to, before piping to 'res'.  For this example, we just used a static template...
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/61-index.htm').pipe(res);

}).listen(1337, '127.0.0.1');


