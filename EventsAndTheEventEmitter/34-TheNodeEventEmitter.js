'use strict';

//  Require core 'events' module
var Emitter = require('events');         //  'Emitter' is defined in title case.
var eventConfig = require('./34-config.js').events;  //  Module which has names of events to limit errors in using magic strings.

var emtr = new Emitter();                //  New object created using the 'new' keyword and the constructor function returned from
                                         //    the 'events' modulde.
emtr.on(eventConfig.GREET, function () {           //  Adds a listener to the eventConfig.GREET event using the 'on' method.
    console.log('Somewhere someone said "Hello!"');
});
emtr.on(eventConfig.GREET, function () {           //  Adds another listener to eventConfig.GREET event.
    console.log('In a land far, far away, a princess said "Pleased to meet you!"');
});
emtr.on(eventConfig.GREET, function () {           //  Adds another listener to eventConfig.GREET event.
    console.log('A cowboy just said "Howdy, pardner!"');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);           //  'emit' method on 'emtr' object is invoke to print out all listener function for the
                                        //    eventConfig.GREET emitter.
