const EventEmitter = require('events');
const emitter = new EventEmitter();

// const greet = () => {
//     emitter.on('greet', () => {
//         console.log('Hello, welcome to the event-driven world of Node.js!');
//     });
// }

// greet();
// emitter.emit('greet');

emitter.on('greet', (name) => {
    console.log(`Hello, ${name}, welcome to the event-driven world of Node.js!`);
});
emitter.emit('greet', 'Alice');
emitter.emit('greet', 'Bob');

