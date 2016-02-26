'use strict';

// Here we use a constructor function to create an object to assign to module.exports
function Greeter() {
    this.greeting = 'Hello World!!!';
    this.greet = function () {
        console.log(this.greeting);
    }
}
module.exports = new Greeter(); //  A new object is created via Greeter constructor function and returned.
