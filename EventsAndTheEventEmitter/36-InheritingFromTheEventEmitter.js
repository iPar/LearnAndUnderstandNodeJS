'use strict';


var EventEmitter = require('events');   //  Include the 'events' module, setting EventEmitter variable equal to its constructor.
var util = require('util');             //  Include 'util' module

function Greetr() {                     //  Create our own function constructor with a '.greeting' property.
    EventEmitter.call(this);            //  This 'call' invocation passes the object created by the Greetr constructor to the
    this.greeting = 'Hello World!';     //    EventEmitter function constructor to cause the methods and properties to be added
}                                       //    directly onto the new object created by Greetr.  This is a more complete inheritance.
                                        //    Note that the 'new' keyword is not needed as a new object is not being created, but
                                        //    rather, we are passing in an object that has already been created.  This also ensures
                                        //    that the 'this' inside 'EventEmitter' is the same as the 'this' inside 'Greetr'.
                                        //    ^^^Invoking '.call(this)' on a function constructor further up the prototype chain is
                                        //    what is known as a 'superconstructor'.
util.inherits(Greetr, EventEmitter);    //  We send our 'Greetr' to the 'inherits' method on 'util' to create a prototype to
                                        //    link inheritance from 'EventEmitter' objects to a prototype to 'Greeter'. This is
                                        //    now the prototype chain: (once greeter1 is created below...)
                                        //            EventEmitter.prototype=>Greeter.prototype=>greeter1

Greetr.prototype.greet = function(data) {  //  Define a method on the 'Greetr' function constructor, which invokes console.log, with
    console.log(this.greeting + ': ' + data);//    the already defined 'greeting', then tells the event emitter to invoke the 'greet'
    this.emit('greet', data);                //    event, thereby calling the attached listeners.
};

var greeter1 = new Greetr();            //  Here we actual create a new object using the 'Greetr' function constructor.

greeter1.on('greet', function(data) {       //  We ad an event listener with the magic string 'greet', which invoke this passed in
    console.log('Someone greeted!: ' + data);    //    anonymous function (which simply logs 'Someone greeted!') when the 'greet' event
});                                     //    is later emitted.

greeter1.greet('Tony');                       //  We call the 'greet' methos on the 'greeter1' object.
