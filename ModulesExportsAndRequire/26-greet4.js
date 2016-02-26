'use strict';


//  This time we assign module.exports to the 'Greeter' constructor function but do not invoke it here.
function Greeter() {
    this.greeting = 'Hello World!!!!';
    this.greet = function () {
        console.log(this.greeting);
    }
}
module.exports = Greeter; //  module.exports is set equal to the constructor function.
