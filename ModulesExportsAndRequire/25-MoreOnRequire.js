'use strict';


//  Requires 'salutation' module. Since there is no salutation.js file, it will go to the salutation/ folder and will look for
//    the index.js file therein and will run that file.
var salutation = require('./salutation');
salutation.english();
salutation.spanish();


