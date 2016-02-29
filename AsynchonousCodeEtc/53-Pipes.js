'use strict';


//  This exercise exemplifies what Node is really great at - asynchronously reading, piping and writing streams (chunks of
//    buffered data).
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/51-file.txt');         //  Readable stream from target file.
var writeable = fs.createWriteStream(__dirname + '/51-output.txt');     //  Writeable stream to target file.
var compressed = fs.createWriteStream(__dirname + '/51-output.txt.gz'); //  Writeable stream to g-zipped file.
var gzip = zlib.createGzip();                                           //  'gzip' object created that we can then pipe to 'readable',
                                                                        //    and then (once compressed) pipe to 'compressed'.
readable.pipe(writeable);             //  Pipe from 'readable' to 'writeable'.

readable.pipe(gzip).pipe(compressed); //  Pipe from 'readable' to 'gzip' then pipe to 'compressed'.
