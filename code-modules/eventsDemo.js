import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log("Hello "+ name);
}

function goodByeHandler(name){
    console.log("GoodBye "+ name);
}

// Register event listeners

myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodByeHandler);


// Emit events
myEmitter.emit('greet', 'Bhanu');
myEmitter.emit('goodbye', 'Prakash');

// Error handling
myEmitter.on('error',(err) => {
    console.log("An Error Occured: ",err);
});

// Simulate Error
myEmitter.emit('error', new Error('Something went wrong'));