'use strict';

/*
 *  In which we set up a simple Express app and use its middleware functionality to serve static files.  We also write our own
 *  middleware function to simply log to the console the Url requested.
 */
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});

app.get('/', function(req, res) {
    res.render('index');            //  Using the view engine defined above to render index.ejs from the default 'views' folder.
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id });  //  Passing in object as variable to 'person.ejs' template.
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe', occupation: 'Coder' });
});

app.listen(port);
