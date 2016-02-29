'use strict';

var fs = require('fs');

// Create a readable stream from text file and encode it in 'utf8'.
var readable = fs.createReadStream(__dirname + '/51-file.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 }); //  Making buffer size
                                                                                                                //    32KB.
var writeable = fs.createWriteStream(__dirname + '/51-output.txt');
readable.on('data', function(chunk) {                                                  // Print each chunk as it comes in.  Because
    // console.log(chunk);                                                             //   we have set the buffer size for a file
    console.log(chunk.length);                                                         //   to 16KB, and the file read is ~90KB, this
                                                                                       //   prints as six (6) chunks.
    writeable.write(chunk);
});
