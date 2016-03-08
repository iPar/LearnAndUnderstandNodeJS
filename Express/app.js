'use strict';

/*
 *  In which we set up a simple Express app and use its middleware functionality to serve static files.  We also write our own
 *  middleware function to simply log to the console the Url requested.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

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
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });  //  Passing in object as variable to 'person.ejs' template.
});

// POST /login gets urlencoded bodies
app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
/*
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
*/
});

app.get('/api/person/:id', jsonParser, function(req, res) {
    //  Get that data from database
});

app.post('/api/person', jsonParser, function(req, res) {
    //  Save to the database
});

app.delete('/api/person/:id', function(req, res) {
    //  Delete from the database
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe', occupation: 'Coder' });
});

app.listen(port);
