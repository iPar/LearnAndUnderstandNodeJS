'use strict';

var firstname = 'Jane';

//  Immediately invoked function expression - a shorthand way to create the functionality of a module.  It can be run immediately
(function (lastname) {              //  without affecting other objects and variables as it has a different scope.
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}('Doe'));   //  Note the additional set of parenthesis immediately invokes the anonymous function, passing in the 'Doe' argument.

console.log(firstname); //  As the initial 'firstname' function definition above is outside the scope of the function expression,
                        //    it is not affected by its defining 'firstname' as 'John'.  These variables have different scope and
                        //    therefore do not reference the same memory location, despite having the same variable name.
