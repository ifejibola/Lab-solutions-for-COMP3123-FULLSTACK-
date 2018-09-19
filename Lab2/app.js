// code will require and use the module

var ft = require('./sportsteam');
var comp = require('./compare');
var calc = require('./calculate');
ft.teamname = 'Leafs';

// call module method
ft.Cheer();
ft.Boo();

var num1 = 5; var num2 = 5;

var result = (comp.AreNumberEqual(num1, num2)) ? 
calc.Add(num1, num2) : calc.Subtract(num1, num2);

console.log(result);

//NodeJs : USing the EVENTs AND Emitter
var events = require('event');
var eventEmitter = new events.eventEmitter();

//2 Create an event handler to handle when the event is raised. 
var fn = function(){
    console.log('Call me.');
}
eventEmitter.on('call', fn);
eventEmitter.emit('call');