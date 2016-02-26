'use strict';


//  This demonstrates a QUIRK in javascript.
exports = function () {
    console.log('Hello');
};

console.log(exports);         //  Note that this print statement indicates 'exports' is equal to a function, while...
console.log(module.exports);  //  This print statement indicates 'exports' is equal to a function.

//  'module.exports' points to an empty object that is setup up for us when our code is run and the function expression is
//    invoked, 'module.exports' is passed as the variable 'exports' to the calling 'require' function, but they still both
//    point to the same object, same location in memory, i.e. a pass by reference.  The quirk in javascript is with regard
//    setting a variable equal to a value.  'Module.exports' is still pointing at an object, but 'exports' was set equal to
//    a value.
//
//
//    Note that this is based on the function that the entirety of code is wrapped in, for which 'exports' and 'module' are
//    passed in.  Initially, 'module.exports' and 'exports' are pointing at the same object.  The following is the function
//    wrapping around our code:
//
//    (function (exports, require, module, __filename, __dirname) {
//      {{{  OUR CODE AS WRITTEN ABOVE EXISTS HERE  }}}
//    });
//
//    In this code, the 'exports' parameter is really the same as 'module.exports'.
//
//    KEY TAKEAWAY: In javascript, when a variable is set equal to a value, it is a new spot in memory.  So the assignment
//      of the function to 'exports' above created a new place in memory and 'exports' and 'module.exports' therefore no
//      longer point to (reference) the same place in memory.  Furthermore, 'module.exports' is what is returned from the
//      'require' call.  Because the 'exports' assignment created a new reference for 'exports', and it no longer references
//      the same memory as 'module.exports', the function above is not passed back to 'require'.

