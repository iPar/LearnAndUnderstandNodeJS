'use strict';


//  This example demonstrates a more complete convention for inheritance: the use of a superconstructor.  Here, though 'Policeman'
//    inherits from 'Person', because the 'Person()' function constructor was never called on the object created by the 'Policeman()'
//    function constructor, the 'firstname' and 'lastname' properties were never properly initialized on the new 'officer' object.
//    UNLESS: 'Person.call(this)' is invoked within the 'Policeman()' function constructor, passing the object created by the
//    'Policeman()' function constructor to the 'Person()' function constructor to attach the methods and properties in is to the
//    same 'officer' object.
var util = require('util');

function Person() {
    this.firstname = 'John'
    this.lastname = ' Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' '  + this.lastname);
}

function Policeman() {
    Person.call(this);                //  This invocation is what results in a more complete inheritance - a superconstructor.
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);     //  'util.inherits' never actually runs the 'Person()' constructor.  It simply connects the
var man = new Person();               //    prototypes.  All the function constructors must be run in order to complete the
var officer = new Policeman();        //    inheritance of all the properties and methods of those prototypes further up the
officer.greet();                      //    prototype chain.
console.log(officer);
console.log(officer.__proto__.__proto__); //  This stdout output shows that the '.greet' function, however, is on the prototype of
                                          //    the prototype of the 'officer' object, and is therefore accessible by it.
