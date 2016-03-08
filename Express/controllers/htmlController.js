'use strict';

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {

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
};
