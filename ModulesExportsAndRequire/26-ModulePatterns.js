'use strict';

//  Because 'greet1' module.exports only contains a single function, we can simply call it as follows...
var greet = require('./26-greet1');
greet();

//  Here we specify exactly what it is that we want off of the module.exports object --> the 'greet' property
var greetAgain = require('./26-greet2').greet; //  Note the '.greet' extension to the 'require' function call.  The 'require' function
greetAgain();                               //    call returns the module.exports object which, in this instance, we have attached
                                            //    the 'greet' property to.  So with this statement we are assigning the '.greet'
                                            //    property value (which is a method) to the 'greetAgain' variable.  As such we only
                                            //    need to use 'greetAgain()' in order to invoke the function assigned to
                                            //    'greetAgain'.

var thriceGreet = require('./26-greet3');      //  Constructor function is called via calling require and object is returned.
thriceGreet.greet();
thriceGreet.greeting = 'Changed hello world'; //  Changing 'greeting' property to show object was passed by reference below.

var greet3b = require('./26-greet3');          //  Note that the object was cached by require function and therefore this invocation
greet3b.greet();                            //    only creates a reference to the same object referenced by 'thriceGreet' above.
                                            //    Thus, the output here is the 'Changed hello world' string above.
var Greet4 = require('./26-greet4');           //  Here 'Greet4' is set to the constructor function defined in the 'greet4' module.
var grtr = new Greet4();                    //  Here a new object is created using the Greet4 constructor function.
grtr.greet();                               //  '.greet()' method is called to output '.greeting' message.
grtr.greeting = 'Another change';           //  Changed the 'greeting' to show that we can create a new object below.
var grtr2 = new Greet4();                   //  New object created.
grtr2.greet();                              //  Note that change to the 'greeting' message above does not affect this message.

var greet5 = require('./26-greet5');
greet5.greet();
