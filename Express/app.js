'use strict';

/*
 *  In which we set up a simple Express app and use its middleware functionality to serve static files.  We also write our own
 *  middleware function to simply log to the console the Url requested.
 */
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dbKey = require('./dbKey');
var uniqKey = dbKey();

console.log(uniqKey);
mongoose.connect(uniqKey);

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '1234 Temple Drive'
});

//  save the user
john.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

var jane = Person({
    firstname: 'jane',
    lastname: 'Doe',
    address: '1234 Temple Drive'
});

//  save the user
jane.save(function(err) {
    if (err) throw err;

    console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);

    //  get all the users
    Person.find({}, function(err, users) {
        if (err) throw err;

        //  object of all users
        console.log(users);
    });

    next();
});

htmlController(app);
apiController(app);

app.listen(port);
