'use strict';

//  Require new emitter module
var Emitter = require('./33-emitter');   //  Note that module.exports is equal to the constructor function.  Thus, the variable
                                         //    'Emitter' is defined in title case.
var emtr = new Emitter();                //  New object created using the 'new' keyword and the 'Emitter' constructor function.

emtr.on('greet', function () {           //  Adds a listener to the 'greet' event using the 'on' method.
    console.log('Somewhere someone said "Hello!"');
});
emtr.on('greet', function () {           //  Adds another listener to 'greet' event.
    console.log('In a land far, far away, a princess said "Pleased to meet you!"');
});
emtr.on('greet', function () {           //  Adds another listener to 'greet' event.
    console.log('A cowboy just said "Howdy, pardner!"');
});

console.log('Hello!');
emtr.emit('greet');                     //  'emit' method on 'emtr' object is invoke to print out all listener function for
                                        //    the 'greet' event, looping through the 'greet' array in the 'events' object on
                                        //    the 'emtr' object.

emtr.on('bye', function () {            //  We can then set up a different event emitter, using a different string key word,
    console.log('Adios, my compadre!'); //    which in this case is 'bye'.  Three listener functions are added to the now newly
});                                     //    created array, which is the value for 'bye' key on the events object on the emtr
emtr.on('bye', function () {            //    object.
    console.log('Catch you on the flip side!');
});
emtr.on('bye', function () {
    console.log('Arriva derch-ay, homeboy!');
});

console.log('Bye!');
emtr.emit('bye');                       //  Once again, all of the functions for the 'bye' array are output via 'emit' invocation.
