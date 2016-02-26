'use strict';


//  object properties and methods
var obj = {
    greet: 'Hello'
};

console.log(obj.greet);       //  Dot notation
console.log(obj['greet']);    //  Bracket notation

var prop = 'greet';           //  Set a variable equal to a string that...
console.log(obj[prop]);       //  ...we can then use in bracket notation.


//  functions and arrays
var arr = [];

arr.push(function() {         //  Here we 'push' three functions into an array.  Recall functions are first class and therefore
    console.log('Hello world1');  //  can be used like any other variable.
});
arr.push(function() {
    console.log('Hello world2');
});
arr.push(function() {
    console.log('Hello world3');
});

arr.forEach(function(item) {    //  Then we loop through each of the elements in the array...
    item();                     //  ...and invoke the function in each item using the '()'.
});
