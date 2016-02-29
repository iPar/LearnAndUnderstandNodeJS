'use strict';

//  ES6 function constructor for creating array buffer.  The following code in ES6 shows that going forward JavaScript is in fact
//    able to deal with binary data, where previously it wasn't (or at least not very well).  So previously, binary data was handled
//    by NodeJS in C++.  But looking to the future, and utilization of ES6, binary data can be handled in JavaScript.
var buffer = new ArrayBuffer(8);                      //  Note that the size of the buffer to be created is in bytes.  Here a buffer
                                                      //    of 8 bytes in length is being created.
var view = new Int32Array(buffer);                    //  A view is a typed array meaning that it's an array and we can deal with it
                                                      //    as an array and give it the buffer to work with.  Here we are storing the
                                                      //    buffer as an array of integers with 32 bits for each integer.
view[0] = 5;
view[1] = 15;
view[2] = 0;                                          //  Array only has storage for 2 32-bit numbers (64 bits) as 8 8-bit (64 bit)
                                                      //    bytes were specified as the buffer size.
console.log(view);                                    //  As such, only '5' and '15' will be printed.
