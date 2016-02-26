'use strict';

//  pass by value
function change (b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a); //  Outputs '1' as the value of 'a' is not affected by the change to 'b' within the 'change' function.  This is
                //    because 'b' is a COPY of 'a' and does not reference the same location in memory.

//  pass by reference
function changeObj (d) {      //  Objects are passed by reference, meaning they are NOT copied to a new location in memory when
    d.prop1 = function () {}; //    a function is invoked, but instead reference the same location in memory.  Thus, any changes
    d.prop2 = {};             //    to 'd' made within the 'changeObj' function, also result in changes to 'c'.
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);   //  This output reflects the changes made by the 'changeObj' function invocation made above.
