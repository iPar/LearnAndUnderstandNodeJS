'use strict';


function greet(callback) {
    console.log('Hello!');
    var data = {
        name: 'John Doe'
    };
    callback(data);
}

function response(data) {
    console.log('Right back atcha, ' + data.name + '!!');
}

greet(response);

greet(function(data) {
    console.log('The callback was invoked by ' + data.name);
});
