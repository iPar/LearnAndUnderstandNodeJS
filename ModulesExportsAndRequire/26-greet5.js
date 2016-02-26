'use strict';

//  This module pattern is known as the 'revealing module pattern' and is quite common and considered a 'clean' way of doing it.
var greeting = 'Hello world!!5!!';

function greet () {
    console.log(greeting);
}

module.exports = {    //  Note by only including the 'greet' method in the object, only this method is exposed outside the scope
    greet: greet      //    of this module.  However, this does not prevent us from using 'greet' such that it will still output
};                    //    the 'greeting' when we invoke 'greet' outside the module.
