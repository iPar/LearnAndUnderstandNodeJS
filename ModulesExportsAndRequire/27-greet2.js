'use strict';

//  Here we MUTATE the 'exports' object, creating a function within it.
exports.greet = function () {
    console.log('Hello');
};

console.log(exports);         //  This print statement indicates 'exports' is equal to an object, which now has a 'greet' method.
console.log(module.exports);  //  As is module.exports.  The reference is maintained.  No new copy is created.

