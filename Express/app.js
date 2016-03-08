'use strict';

/*
 *  In which we set up a simple Express app and use its middleware functionality to serve static files.  We also write our own
 *  middleware function to simply log to the console the Url requested.
 */
var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

htmlController(app);
apiController(app);

app.listen(port);
