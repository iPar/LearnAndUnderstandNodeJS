'use strict';


var greetings = require('./greetings.json');

//  This 'greet' function is what is returned via module.exports when this module is required.
var greet = function () {
    console.log(greetings.en);
}
module.exports = greet;
