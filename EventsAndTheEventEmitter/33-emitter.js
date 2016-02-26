'use strict';

//  Constructor Function
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {   //  'on' function loads functions into array by 'type' - a passed in string
    this.events[type] = this.events[type] || [];    //  Checks to see if an array for this 'type' has already been created,
    this.events[type].push(listener);               //    otherwise it creates it.  Then, the new 'listener' function is pushed
}                                                   //    to the array.

Emitter.prototype.emit = function(type) {           //  'emit' function checks to see if the event of the previous 'type' is
    if (this.events[type]) {                        //    there.  If so, all the listeners for that 'type' are invoked.
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;
