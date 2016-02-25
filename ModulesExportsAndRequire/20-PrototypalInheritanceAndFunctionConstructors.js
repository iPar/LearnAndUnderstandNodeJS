'use strict';

//  Function Constructor for 'Man' object
function Man (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    //  Note that the object is returned automatically
}

//  Function Constructor for 'Woman' object
function Woman (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//  Prototype which is inherited by all 'Man' objects
Man.prototype.greet = function () {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

//  Prototype which is inherited by all 'Woman' objects
Woman.prototype.greet = function () {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

//  New 'Man' object is created named 'john'
var john = new Man('John', 'Doe');
john.greet();   //  'greet' prototype method is invoked on 'john'

//  New 'Woman' object is created named 'jane'
var jane = new Woman('Jane', 'Doe');
jane.greet();   //  'greet prototype method is invoked on 'jane'

console.log(john.__proto__);  //  Shows that the greet method is a prototype of the 'john' object
console.log(jane.__proto__);  //  Same goes for the 'jane' object, but 'jane' is not the same object as 'john'
console.log(john.__proto__ === jane.__proto__); //  We can compare their prototypes to confirm that though they both have a
                                                //    'greet' method, they are of different objects and thus their prototypes
                                                //    are not the same.

//  Note that an object can have multiple prototypes
Man.prototype.bye = function () {
    console.log('Later, ' + this.firstname);
}

var drew = new Man('Drew', 'Doe');
drew.greet();
console.log(john.__proto__);  //  Shows that both the greet and the by methods are prototypes for 'Man' objects
console.log(drew.__proto__);  //  Same goes for Drew
console.log(john.__proto__ === drew.__proto__); //  Note that because 'john' and 'drew' are instances of the same object,
                                                //    a comparison of their prototypes evaluates to 'true'.

john.bye();
drew.bye();
