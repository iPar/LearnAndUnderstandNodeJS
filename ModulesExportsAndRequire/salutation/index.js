'use strict';


//  This file is within the salutation/ folder and therefore be run when the require statement is ran for 'salutation.'
var english = require('./english'); //  Requires the 'english', which is a .js within this same salutation/ directory.
var spanish = require('./spanish'); //  Same for the 'spanish' module, which also is a .js file.

module.exports = {    //  Places the results returned from the 'english' and 'spanish' modules in an object for export
    english: english, //    with a key matching the variable returned from the require statement for each of the 'english'
    spanish: spanish, //    and the 'spanish' modules.
};
