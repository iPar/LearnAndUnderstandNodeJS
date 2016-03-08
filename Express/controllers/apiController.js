'use strict';

module.exports = function(app) {

    app.get('/api/person/:id', function(req, res) {
        //  Get that data from database
    });

    app.post('/api/person', function(req, res) {
        //  Save to the database
    });

    app.delete('/api/person/:id', function(req, res) {
        //  Delete from the database
    });

};
