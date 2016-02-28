'use strict';


var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello, ${ this.name }!`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'});         //  By using 'call' or 'apply' methods, we are highjacking the function in the 'obj'
obj.greet.apply({name: 'Duffy Doe'});       //    object and are passing in our own object to apply the 'this' keyword to.
obj.greet({name: 'Steve Doe'});             //  Note that simply passing in an object to the function alone will not have the
                                            //    same effect
//  Note: There is a slight difference between 'call' and 'apply' in how additional parameters are passed in (if the function
//    so requires additional parameters, with the former requiring they passed as a comma separate list ({}, param1, param2, etc.)
//    and the latter requiring they be passed in an array ({}, [param1, param2, etc]).
