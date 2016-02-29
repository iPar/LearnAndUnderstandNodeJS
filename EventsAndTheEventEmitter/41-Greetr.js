'use strict';


//  Here we use ES6 syntax to replicate the EventEmitter inherittance done in previous exercises.
var EventEmitter = require('events');

//  Note the 'extends EventEmitter' in the class declaration and the 'super()' within the constructor or necessary to effectuate
//    the superconstructor functionality, causing the current object created by the 'constructor()' function to have all the
//    properties on the 'EventEmitter' object.
module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet', data);
    };
}
