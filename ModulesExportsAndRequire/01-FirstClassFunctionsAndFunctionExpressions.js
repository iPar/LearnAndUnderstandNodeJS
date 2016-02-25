'use strict';


// function statement
function greet () {
    console.log('Hi');
}
greet();


// functions are first-class
function logGreeting (fn) {
    fn();
}
logGreeting(greet);


// function expression
var greetMe = function () {
    console.log('Hi Tony');
}
greetMe();

// it's still first-class
logGreeting(greetMe);


// using a function on the fly
logGreeting(function () {
    console.log('Hello Tony!');
});
