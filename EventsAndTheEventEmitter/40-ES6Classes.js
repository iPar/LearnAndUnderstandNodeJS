'use strict';


//  In this file, we show how ES6 uses 'syntactic sugar'(a feature that makes typing/reading commands easier, but does not change
//    how things are implemented under the hood) to implement creation of classes.
class Person {
    //  Anything you add to the function constructor below is automatically put on each object you call 'new Person()' for (create).
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    //  Anything you add to the class, but outside of the function constructor, is automatically put on the prototype.
    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

/*  This was how we used a function constructor in previous examples to create objects.  Replaced by 'constructor(firstname, lastname)'
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
*/
/*  This was how we added functions to the prototype in previous examples.  Replaced by 'greet()' within 'class Person' declaration.
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};
*/

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
