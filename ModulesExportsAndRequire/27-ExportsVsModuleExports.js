'use strict';

var greet = require('./27-greet.js');           //  sets 'greet' to the module.exports object (which is still empty)
var greet2 = require('./27-greet2.js').greet;   //  sets 'greet2' to the greet method on the 'module.exports' object

greet2();   //  This function call works.
greet();    //  This one does not as it tries to call a function, but 'greet' is referencing an empty object per the
            //    explanation given in the '27-greet.js' module.


//    RECOMMENDATION BASED DUE TO THE QUIRK DEMONSTRATED HEREIN:  Just use 'module.exports' in assignments within a
//      module, as it will allow you to avoid the 'breaking the reference' quirk resulting from an assignment of the
//      'exports' parameter.
