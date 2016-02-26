'use strict';


var name = 'John Doe';

var greet = 'Hello ' + name;      //  How to concatenate strings prior to ES6.
var greet2 = `Hello ${ name }`;   //  Template literal used to concatenate strings in ES6.

console.log(greet);               //  Logging both to the console shows the same result. Note that we cannot use ES6 in the
console.log(greet2);              //    browser, unless the browser supports is.
