const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', ()=>{
    console.log('listener called');
})



//Raise an event
emitter.emit('messageLogged')