'use strict';

/*
 *  In which we set up a simple Express app and use its middleware functionality to serve static files.  We also write our own
 *  middleware function to simply log to the console the Url requested.
 */
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe', occupation: 'Coder' });
});

app.listen(port);
