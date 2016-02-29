'use strict';


var buf = new Buffer('Hello', 'utf8');//  Note that 'Buffer()' is available without needing to use the 'require()' function as buffers
                                      //    are so important and used so often that this module is automatically included.  ALSO NOTE
                                      //    that by supplying 5 characters with the 'Hello' initialization, the buffer only has the
                                      //    finite storage for 5 characters in memory.
console.log(buf);                     //  Will output the unicode in hexadecimal
console.log(buf.toString());          //  Will output 'Hello'
console.log(buf.toJSON());            //  Will output with a 'type' and an array for 'data', with unicode converted to based 10 numbers.
console.log(buf[2]);                  //  Note that the buffer behaves rather like an array.

buf.write('wo');                      //  Overwrites the 'he' with 'wo'.  This buffer length is 5 characters.  Writing to it when it is
console.log(buf.toString());          //    already full does not expand or stretch the buffer length, but rather, begins to write over
                                      //    it.
