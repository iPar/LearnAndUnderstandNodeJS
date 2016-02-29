'use strict';

//  This demonstrates the difference between a synchronous and an asynchronous function call in NodeJS.
var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/50-greet.txt', 'utf8');                   //  Synchronous file read.  I.e. waits til file
                                                                                    //    is read before moving on to next line of
console.log(greet);                                                                 //    code.  Now outputs what it read.

var greet2 = fs.readFile(__dirname + '/50-greet.txt', 'utf8', function(err, data) { //  Asynchronous file read.  Sends libuv out to
    console.log(data);                                                              //    get data from the file, while it moves on
});                                                                                 //    to the next instruction in the script
                                                                                    //    before logging the data to the screen.
console.log('Done!');                                                               //  NOTE that 'Done!' is logged to the screen
                                                                                    //    BEFORE the data from the async call is.
